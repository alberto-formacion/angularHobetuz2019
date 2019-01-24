import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { BuscadorPipe } from './pipes/buscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
