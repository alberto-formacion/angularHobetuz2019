import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { SinTerminarPipe } from './pipes/sin-terminar.pipe';
import { PriorizarTareasPipe } from './pipes/priorizar-tareas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SinTerminarPipe,
    PriorizarTareasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
