import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AgendaComponent } from './components/agenda/agenda.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
