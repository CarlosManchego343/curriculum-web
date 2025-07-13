import { Routes } from '@angular/router';
import { PresentacionComponent } from './general_view/presentacion/presentacion.component';
import { TimelineExpLabComponent } from './general_view/timeline-exp-lab/timeline-exp-lab.component';
import { ProyectosComponent } from './general_view/proyectos/proyectos.component';

export const routes: Routes = [
    {
        path: '',
        data: { animation: 'presentacion' },
        component: PresentacionComponent
    },
    {
        path: 'experiencia',
        data: { animation: 'experiencia' },
        component: TimelineExpLabComponent
    },
    {
        path: 'proyectos',
        data: { animation: 'proyectos' },
        component: ProyectosComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
