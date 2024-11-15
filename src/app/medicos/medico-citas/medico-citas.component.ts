import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ConsultaDTO } from './consulta-dto';

interface Cita {
  id: number;
  fecha: string;
  hora: string;
  medicoId: number;
  medicoNombre: string;
  medicoApellido: string;
  pacienteId: number;
  pacienteNombre: string;
  pacienteApellido: string;
  horarioDia: string;
  horarioInicio: string;
  horarioFin: string;
  especialidadId: number;
  especialidadNombre: string;
  estado: string;
  consultaCreada: boolean; // Nuevo campo para controlar si la consulta ya fue creada
}

@Component({
  selector: 'app-medico-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medico-citas.component.html',
  styleUrls: ['./medico-citas.component.css']
})
export class MedicoCitasComponent implements OnInit {
  citas: Cita[] = [];
  medicoId: number;

  constructor(private http: HttpClient) {
    this.medicoId = parseInt(localStorage.getItem('userId') || '0', 10) - 1;
  }

  ngOnInit(): void {
    this.loadCitas();
  }

  loadCitas() {
    this.http.get<Cita[]>('http://143.198.147.110/api/citas').subscribe(
      (citas) => {
        this.citas = citas.filter(cita => cita.medicoId === this.medicoId);
      },
      (error) => {
        Swal.fire({
          title: 'Error al cargar citas',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error loading citas', error);
      }
    );
  }

  aceptarCita(citaId: number) {
    this.http.post(`http://143.198.147.110/api/citas/aceptar?citaId=${citaId}&medicoId=${this.medicoId}`, {}, { responseType: 'text' }).subscribe(
      (response) => {
        Swal.fire('Cita atendida', response, 'success');
        this.loadCitas();
      },
      (error) => {
        Swal.fire({
          title: 'Error al aceptar cita',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error al aceptar cita', error);
      }
    );
  }

  cancelarCita(citaId: number) {
    this.http.post(`http://143.198.147.110/api/citas/cancelar/medico?citaId=${citaId}&medicoId=${this.medicoId}`, {}, { responseType: 'text' }).subscribe(
      (response) => {
        Swal.fire('Cita cancelada', response, 'success');
        this.loadCitas();
      },
      (error) => {
        Swal.fire({
          title: 'Error al cancelar cita',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error al cancelar cita', error);
      }
    );
  }

  crearConsulta(cita: Cita) {
    let sintomas: string[] = [];

    Swal.fire({
      title: 'Crear Consulta',
      html: `
        <textarea id="diagnostico" class="swal2-textarea" placeholder="Diagnóstico"></textarea>
        <textarea id="tratamiento" class="swal2-textarea" placeholder="Tratamiento"></textarea>
        <textarea id="notas" class="swal2-textarea" placeholder="Notas"></textarea>
        <input type="text" id="sintoma" class="swal2-input" placeholder="Agregar síntoma">
        <button id="addSintomaButton" class="swal2-confirm swal2-styled" style="margin-top: 10px;">Agregar Síntoma</button>
        <ul id="sintomasList"></ul>
      `,
      focusConfirm: false,
      didOpen: () => {
        const addSintomaButton = document.getElementById('addSintomaButton');
        const sintomasList = document.getElementById('sintomasList');
        const sintomaInput = document.getElementById('sintoma') as HTMLInputElement;

        addSintomaButton?.addEventListener('click', () => {
          const sintoma = sintomaInput.value.trim();
          if (sintoma) {
            sintomas.push(sintoma);
            const listItem = document.createElement('li');
            listItem.textContent = sintoma;
            sintomasList?.appendChild(listItem);
            sintomaInput.value = '';
          }
        });
      },
      preConfirm: () => {
        const diagnostico = (document.getElementById('diagnostico') as HTMLTextAreaElement).value;
        const tratamiento = (document.getElementById('tratamiento') as HTMLTextAreaElement).value;
        const notas = (document.getElementById('notas') as HTMLTextAreaElement).value;

        if (!diagnostico) {
          Swal.showValidationMessage('El diagnóstico es obligatorio');
        }
        return { diagnostico, tratamiento, notas, sintomas };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const consultaDTO: ConsultaDTO = {
          citaId: cita.id,
          pacienteId: cita.pacienteId,
          medicoId: cita.medicoId,
          fecha: cita.fecha,
          diagnostico: result.value?.diagnostico,
          sintomas: result.value?.sintomas, // Asignar síntomas ingresados
          tratamiento: result.value?.tratamiento,
          notas: result.value?.notas
        };

        this.http.post('http://143.198.147.110/api/consultas', consultaDTO, { responseType: 'text' }).subscribe(
          (response) => {
            Swal.fire('Consulta creada', 'success');

            // Actualizar la cita para establecer consultaCreada en true
            const citaActualizada = { ...cita, consultaCreada: true };
            this.http.put(`http://143.198.147.110/api/citas/${cita.id}`, citaActualizada).subscribe(() => {
              this.loadCitas(); // Recargar citas para reflejar el cambio
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error al crear consulta',
              text: 'Por favor, inténtalo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
            console.error('Error al crear consulta', error);
          }
        );
      }
    });
  }
}
