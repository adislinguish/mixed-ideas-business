import { Routes } from '@angular/router';
import { ConcurrencyComponent } from './core/concurrency/concurrency.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { AppointmentComponent } from './core/appointment/appointment.component';
import { WeddingTableComponent } from './core/wedding-table/wedding-table.component';
import { FCTestCheckbox } from './common/fc-checkbox/fc-checkbox';
import { SolitarieComponent } from './core/solitarie/solitarie/solitarie.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'layout',
        pathMatch: 'full'
    },
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            {
                path: 'concurrency',
                component: ConcurrencyComponent
            },
            {
                path: 'appointments',
                component: AppointmentComponent
            },
            {
                path: 'dresses',
                component: WeddingTableComponent
            },
            {
                path: 'fc-checkbox',
                component: FCTestCheckbox
            },
            {
                path: 'games',
                component: SolitarieComponent
            }
        ]
    }
];

