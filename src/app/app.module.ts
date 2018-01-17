import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AgendaComponent } from './components/agenda/agenda.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';
import { NovoEventoComponent } from './components/novo-evento/novo-evento.component';
import { MainComponent } from './components/main/main.component';
import { FaqComponent } from './components/faq/faq.component';
import { ClubeComponent } from './components/clube/clube.component';
import { SocioComponent } from './components/socio/socio.component';
import { DadosEstaticosComponent } from './components/dados-estaticos/dados-estaticos.component';
import { FaqNovoComponent } from './components/faq-novo/faq-novo.component';
import { ClubeNovoComponent } from './components/clube-novo/clube-novo.component';
import { SocioNovoComponent } from './components/socio-novo/socio-novo.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AgendaComponent,
    TipoEventoComponent,
    NovoEventoComponent,
    MainComponent,
    FaqComponent,
    ClubeComponent,
    SocioComponent,
    DadosEstaticosComponent,
    FaqNovoComponent,
    ClubeNovoComponent,
    SocioNovoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
