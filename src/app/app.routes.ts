import { Routes } from '@angular/router';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { TimelineExpLabComponent } from './componentes/timeline-exp-lab/timeline-exp-lab.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Presentacion',
        component: PresentacionComponent
    },
    {
        path: 'experiencia',
        title: 'Experiencia',
        component: TimelineExpLabComponent
    },
    {
        path: 'proyectos',
        title: 'Proyectos',
        component: ProyectosComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
