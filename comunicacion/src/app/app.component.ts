import { Component } from '@angular/core';
import { Objeto } from './model/objeto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public objeto: Objeto;

  title = 'comunicacion';

  recibirObjeto(event: Objeto) {
    this.objeto = event;
    console.log(event);
  }
}


