import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

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
}

@Component({
  selector: 'app-citas-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-4 text-center">Listado de Citas</h1>
      <div class="flex items-center justify-center mb-4">
        <input type="date" [(ngModel)]="fechaFiltro" class="border p-2 rounded" />
        <button (click)="filtrarPorFecha()" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Filtrar por fecha
        </button>
      </div>

      <div *ngIf="citasFiltradas.length === 0 && fechaFiltro === hoy" class="text-center text-gray-600 mb-4">
        No hay citas hoy
      </div>

      <table *ngIf="citasFiltradas.length > 0" class="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
        <tr class="bg-gray-800 text-white">
          <th class="p-4 text-left">Fecha</th>
          <th class="p-4 text-left">Hora</th>
          <th class="p-4 text-left">Médico</th>
          <th class="p-4 text-left">Paciente</th>
          <th class="p-4 text-left">Especialidad</th>
          <th class="p-4 text-left">Estado</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let cita of citasFiltradas" class="hover:bg-gray-100">
          <td class="p-4">{{ cita.fecha }}</td>
          <td class="p-4">{{ cita.hora }}</td>
          <td class="p-4">{{ cita.medicoNombre }} {{ cita.medicoApellido }}</td>
          <td class="p-4">{{ cita.pacienteNombre }} {{ cita.pacienteApellido }}</td>
          <td class="p-4">{{ cita.especialidadNombre }}</td>
          <td class="p-4">{{ cita.estado }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #390303;
      font-weight: bold;
    }
  `]
})
export class CitasListComponent implements OnInit {
  citas: Cita[] = [];
  citasFiltradas: Cita[] = [];
  fechaFiltro: string = '';
  hoy: string = new Date().toISOString().split('T')[0]; // Fecha de hoy en formato YYYY-MM-DD

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this.http.get<Cita[]>('http://143.198.147.110/api/citas').subscribe(
      data => {
        this.citas = data;
        this.citasFiltradas = data.filter(cita => cita.fecha === this.hoy); // Mostrar citas de hoy al inicio
      },
      error => { console.error('Error al cargar las citas', error); }
    );
  }

  filtrarPorFecha() {
    if (this.fechaFiltro) {
      this.citasFiltradas = this.citas.filter(cita => cita.fecha === this.fechaFiltro);
    } else {
      this.citasFiltradas = this.citas; // Mostrar todas si no hay filtro
    }
  }
}
