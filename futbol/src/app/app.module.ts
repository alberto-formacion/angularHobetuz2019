import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { DetalleEquipoComponent } from './detalle-equipo/detalle-equipo.component';
import { ListaEquipoComponent } from './lista-equipo/lista-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    BuscadorPipe,
    DetalleEquipoComponent,
    ListaEquipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
