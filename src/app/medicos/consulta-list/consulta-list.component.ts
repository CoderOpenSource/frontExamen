import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Consulta {
  id: number;
  fecha: string;
  diagnostico: string;
  tratamiento: string;
  notas: string;
  pacienteNombre: string;
  pacienteApellido: string;
}

@Component({
  selector: 'app-consulta-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {
  consultas: Consulta[] = [];
  medicoId: number;

  constructor(private http: HttpClient) {
    // Obtener el ID del médico almacenado en localStorage
    this.medicoId = parseInt(localStorage.getItem('userId') || '0', 10) - 1;
  }

  ngOnInit(): void {
    this.loadConsultas();
  }

  loadConsultas() {
    // Llamada a la API para obtener las consultas del médico específico
    this.http.get<Consulta[]>(`http://143.198.147.110/api/consultas/medico/${this.medicoId}`).subscribe(
      (consultas) => {
        this.consultas = consultas;
      },
      (error) => {
        Swal.fire({
          title: 'Error al cargar consultas',
          text: 'Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        console.error('Error al cargar consultas', error);
      }
    );
  }
}
