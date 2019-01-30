import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Objeto } from '../model/objeto';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  public objetos: Array<Objeto>;
  @Output() evtEmmiter: EventEmitter<Objeto> = new EventEmitter<Objeto>();

  constructor() { }

  ngOnInit() {
    this.objetos = [
      new Objeto('aaa', 'aaa'),
      new Objeto('bbb', 'bbb'),
      new Objeto('ccc', 'ccc')
    ];
  }

  seleccionar(objeto: Objeto) {
    this.evtEmmiter.emit(objeto);
  }

}
