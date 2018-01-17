import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './components/agenda/agenda.component';
import { NovoEventoComponent } from './components/novo-evento/novo-evento.component';

import { FaqComponent } from './components/faq/faq.component';
import { FaqNovoComponent } from './components/faq-novo/faq-novo.component';

import { ClubeComponent } from './components/clube/clube.component';
import { ClubeNovoComponent } from './components/clube-novo/clube-novo.component';

import { SocioComponent } from './components/socio/socio.component';
import { SocioNovoComponent } from './components/socio-novo/socio-novo.component';

import { MainComponent } from './components/main/main.component';
import { DadosEstaticosComponent } from './components/dados-estaticos/dados-estaticos.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'agenda/novo', component: NovoEventoComponent },
    { path: 'agenda/editar/:id', component: NovoEventoComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'faq/novo', component: FaqNovoComponent },
    { path: 'faq/editar/:id', component: FaqNovoComponent },
    { path: 'clube', component: ClubeComponent },
    { path: 'clube/novo', component: ClubeNovoComponent },
    { path: 'clube/editar/:id', component: ClubeNovoComponent },
    { path: 'socio', component: SocioComponent },
    { path: 'socio/novo', component: SocioNovoComponent },
    { path: 'socio/editar/:id', component: SocioNovoComponent },
    { path: 'dados-estaticos', component: DadosEstaticosComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);