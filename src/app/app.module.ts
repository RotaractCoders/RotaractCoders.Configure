import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AgendaComponent } from './components/agenda/agenda.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NovoEventoComponent } from './components/novo-evento/novo-evento.component';
import { MainComponent } from './components/main/main.component';
import { FaqComponent } from './components/faq/faq.component';
import { ClubeComponent } from './components/clube/clube.component';
import { SocioComponent } from './components/socio/socio.component';
import { DadosEstaticosComponent } from './components/dados-estaticos/dados-estaticos.component';
import { FaqNovoComponent } from './components/faq-novo/faq-novo.component';
import { ClubeNovoComponent } from './components/clube-novo/clube-novo.component';
import { SocioNovoComponent } from './components/socio-novo/socio-novo.component';
import { ArquivoComponent } from './components/arquivo/arquivo.component';
import { ArquivoNovoComponent } from './components/arquivo-novo/arquivo-novo.component';
import { LoginComponent } from './components/login/login.component';
import { AgmCoreModule } from '@agm/core';
import { AuthGuard } from '../app/guards/index';

@NgModule({
  declarations: [
    LayoutComponent,
    AgendaComponent,
    NovoEventoComponent,
    MainComponent,
    FaqComponent,
    ClubeComponent,
    SocioComponent,
    DadosEstaticosComponent,
    FaqNovoComponent,
    ClubeNovoComponent,
    SocioNovoComponent,
    ArquivoComponent,
    ArquivoNovoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPBrFEfACP3kpKHNbIptv1YnXk6S4sl8E'
    })
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
