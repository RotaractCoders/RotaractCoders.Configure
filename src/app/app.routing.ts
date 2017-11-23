import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './components/agenda/agenda.component';

const appRoutes: Routes = [
    { path: '', component: AgendaComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);