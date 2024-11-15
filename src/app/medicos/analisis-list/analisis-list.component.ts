import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Analisis {
  id: number;
  pacienteId: number;
  pacienteNombre: string;
  pacienteApellido: string;
  medicoId: number;
  medicoNombre: string;
  medicoApellido: string;
  tipoAnalisis: string;
  resultado: string;
  fechaRealizacion: string;
  archivoUrl: string;
}

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}

interface Paciente {
  id: number;
  carnet: string;
  fechaNacimiento: string;
  sexo: string;
  edad: number;
  fechaInicioSeguro: string;
  fechaFinSeguro: string;
  usuario: Usuario;
}

@Component({
  selector: 'app-analisis-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analisis-list.component.html',
  styleUrls: ['./analisis-list.component.css']
})
export class AnalisisListComponent implements OnInit {
  analisisList: Analisis[] = [];
  pacientes: Paciente[] = [];
  usuarioId: number; // Asumimos que el usuario autenticado tiene un ID en localStorage
  tiposAnalisis: string[] = [
    'Hemograma completo',
    'Prueba de glucosa',
    'Perfil lipídico',
    'Prueba de función hepática',
    'Prueba de tiroides',
    'Prueba de embarazo',
    'Uroanálisis',
    'Prueba de VIH',
    'Cultivo de sangre',
    'Panel metabólico completo'
  ];

  constructor(private http: HttpClient) {
    this.usuarioId = parseInt(localStorage.getItem('userId') || '0', 10) -1 ;
  }

  ngOnInit(): void {
    this.loadAnalisis();
    this.loadPacientes();
  }

  loadAnalisis() {
    this.http.get<Analisis[]>(`http://143.198.147.110/api/analisis/medico/${this.usuarioId}`).subscribe(
      (analisisList) => {
        this.analisisList = analisisList;
      },
      (error) => {
        Swal.fire({
          title: 'Error al cargar análisis',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error al cargar análisis', error);
      }
    );
  }

  loadPacientes() {
    // Llama al backend para obtener la lista de pacientes
    this.http.get<Paciente[]>('http://143.198.147.110/api/pacientes').subscribe(
      (pacientes) => {
        this.pacientes = pacientes;
      },
      (error) => {
        Swal.fire({
          title: 'Error al cargar pacientes',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error al cargar pacientes', error);
      }
    );
  }

  crearAnalisis() {
    Swal.fire({
      title: 'Crear Análisis',
      html: `
         <p>Selecciona Un Paciente</p>
        <select id="pacienteId" class="swal2-input">
          ${this.pacientes.map(paciente => `<option value="${paciente.id}">${paciente.usuario.nombre} ${paciente.usuario.apellido}</option>`).join('')}
        </select>
        <p>Selecciona un tipo de Analisis</p>
        <select id="tipoAnalisis" class="swal2-input">
          ${this.tiposAnalisis.map(tipo => `<option value="${tipo}">${tipo}</option>`).join('')}
        </select>
        <textarea id="resultado" class="swal2-textarea" placeholder="Resultado"></textarea>
        <input id="archivoUrl" class="swal2-input" placeholder="URL del Archivo">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const pacienteId = (document.getElementById('pacienteId') as HTMLSelectElement).value;
        const tipoAnalisis = (document.getElementById('tipoAnalisis') as HTMLSelectElement).value;
        const resultado = (document.getElementById('resultado') as HTMLTextAreaElement).value;
        const archivoUrl = (document.getElementById('archivoUrl') as HTMLInputElement).value;

        if (!pacienteId || !tipoAnalisis || !archivoUrl) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
        }

        return { pacienteId: parseInt(pacienteId), tipoAnalisis, resultado, archivoUrl };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const analisisData = {
          pacienteId: result.value?.pacienteId,
          medicoId: this.usuarioId,
          tipoAnalisis: result.value?.tipoAnalisis,
          resultado: result.value?.resultado,
          fechaRealizacion: new Date().toISOString().split('T')[0],
          archivoUrl: result.value?.archivoUrl
        };

        this.http.post('http://143.198.147.110/api/analisis', analisisData).subscribe(
          () => {
            Swal.fire('Análisis creado', 'El análisis se ha creado exitosamente', 'success');
            this.loadAnalisis();
          },
          (error) => {
            Swal.fire({
              title: 'Error al crear análisis',
              text: 'Por favor, inténtalo nuevamente.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
            console.error('Error al crear análisis', error);
          }
        );
      }
    });
  }
}
