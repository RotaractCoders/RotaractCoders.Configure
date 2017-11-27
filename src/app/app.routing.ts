import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './components/agenda/agenda.component';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';

const appRoutes: Routes = [
    { path: '', component: AgendaComponent },
    { path: 'tipo-evento', component: TipoEventoComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);