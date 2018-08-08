import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/index';

import { AgendaComponent } from './components/agenda/agenda.component';
import { NovoEventoComponent } from './components/novo-evento/novo-evento.component';

import { FaqComponent } from './components/faq/faq.component';
import { FaqNovoComponent } from './components/faq-novo/faq-novo.component';

import { ClubeComponent } from './components/clube/clube.component';
import { ClubeNovoComponent } from './components/clube-novo/clube-novo.component';

import { SocioComponent } from './components/socio/socio.component';
import { SocioNovoComponent } from './components/socio-novo/socio-novo.component';

import { ArquivoComponent } from './components/arquivo/arquivo.component';
import { ArquivoNovoComponent } from './components/arquivo-novo/arquivo-novo.component';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { DadosEstaticosComponent } from './components/dados-estaticos/dados-estaticos.component';
import { ProcessoEmAndamentoComponent } from './components/processo-em-andamento/processo-em-andamento.component';
import { ListaProcessoComponent } from './components/lista-processo/lista-processo.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard]  },
    { path: 'agenda/novo', component: NovoEventoComponent, canActivate: [AuthGuard]  },
    { path: 'agenda/editar/:id', component: NovoEventoComponent, canActivate: [AuthGuard]  },
    { path: 'faq', component: FaqComponent, canActivate: [AuthGuard]  },
    { path: 'faq/novo', component: FaqNovoComponent, canActivate: [AuthGuard]  },
    { path: 'faq/editar/:id', component: FaqNovoComponent, canActivate: [AuthGuard]  },
    { path: 'clube', component: ClubeComponent, canActivate: [AuthGuard]  },
    { path: 'clube/novo', component: ClubeNovoComponent, canActivate: [AuthGuard]  },
    { path: 'clube/editar/:id', component: ClubeNovoComponent, canActivate: [AuthGuard] },
    { path: 'socio', component: SocioComponent, canActivate: [AuthGuard]  },
    { path: 'socio/novo', component: SocioNovoComponent, canActivate: [AuthGuard]  },
    { path: 'socio/editar/:id', component: SocioNovoComponent, canActivate: [AuthGuard]  },
    { path: 'arquivo', component: ArquivoComponent, canActivate: [AuthGuard]  },
    { path: 'arquivo/novo', component: ArquivoNovoComponent, canActivate: [AuthGuard]  },
    { path: 'arquivo/editar/:id', component: ArquivoNovoComponent, canActivate: [AuthGuard]  },
    { path: 'processo-em-andamento', component: ProcessoEmAndamentoComponent, canActivate: [AuthGuard]  },
    { path: 'lista-processos', component: ListaProcessoComponent, canActivate: [AuthGuard]  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);