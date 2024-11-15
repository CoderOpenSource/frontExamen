import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guards';
import { roleGuard } from './guards/role.guards';
import { loginGuard } from './guards/login.guards';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./shared/components/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN', 'MEDICO'] },
      },
      {
        path: 'especialidades',
        loadComponent: () => import('./business/especialidades/especialidades.component').then(m => m.EspecialidadesComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'medicos',
        loadComponent: () => import('./business/medicos/medicos.component').then(m => m.MedicosComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'pacientes',
        loadComponent: () => import('./business/paciente/paciente.component').then(m => m.PacienteComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'horarios',
        loadComponent: () => import('./business/horarios/horarios.component').then(m => m.HorariosComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'citas',
        loadComponent: () => import('./citas-list/citas-list.component').then(m => m.CitasListComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },

      {
        path: 'pacientes/medico',
        loadComponent: () => import('./medicos/pacientes/pacientes.component').then(m => m.GestionarPacientesComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['MEDICO'] }
      },
      {
        path: 'medico/citas',
        loadComponent: () => import('./medicos/medico-citas/medico-citas.component').then(m => m.MedicoCitasComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['MEDICO'] }
      },
      {
        path: 'medico/consultas',
        loadComponent: () => import('./medicos/consulta-list/consulta-list.component').then(m => m.ConsultaListComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['MEDICO'] }
      },
      {
        path: 'medico/analisis',
        loadComponent: () => import('./medicos/analisis-list/analisis-list.component').then(m => m.AnalisisListComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['MEDICO'] }
      },
      {
        path: 'carreras',
        loadComponent: () => import('./business/carreras/carreras.component').then(m => m.CarrerasComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'facultades',
        loadComponent: () => import('./business/faculties/faculties.component').then(m => m.FacultiesComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'materias',
        loadComponent: () => import('./business/materias/materias.component').then(m => m.MateriasComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'aulas',
        loadComponent: () => import('./business/aulas/aulas.component').then(m => m.AulasComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'departamentos',
        loadComponent: () => import('./business/departamento/departamento.component').then(m => m.DepartamentoComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'docentes',
        loadComponent: () => import('./business/docente/docente.component').then(m => m.DocenteComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'sesionesclase',
        loadComponent: () => import('./business/sesion-clase/sesion-clase.component').then(m => m.SesionClaseComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'programacionesacademicas',
        loadComponent: () => import('./business/programacion-academica/programacion-academica.component').then(m => m.ProgramacionAcademicaComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'estadosasistencia',
        loadComponent: () => import('./business/estado-asistencia/estado-asistencia.component').then(m => m.EstadoAsistenciaComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'asistencias',
        loadComponent: () => import('./business/asistencia/asistencia.component').then(m => m.AsistenciaComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'licencias',
        loadComponent: () => import('./business/licencia/licencia.component').then(m => m.LicenciaComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./business/reportes/reportes.component').then(m => m.ReporteComponent),
        canActivate: [roleGuard],
        data: { expectedRoles: ['ADMIN'] }
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./shared/components/login/login.component').then(m => m.LoginComponent),
    canActivate: [loginGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
