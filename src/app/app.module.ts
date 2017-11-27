import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AgendaComponent } from './components/agenda/agenda.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AgendaComponent,
    TipoEventoComponent
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
