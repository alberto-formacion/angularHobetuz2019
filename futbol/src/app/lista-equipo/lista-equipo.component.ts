import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {

  @Input() equipos: Array<Equipo>;
  @Output() evtEmitter: EventEmitter<Equipo> = new EventEmitter<Equipo>();

  constructor() { }

  ngOnInit() {
  }

  modificarEstilos(equipo: Equipo) {
    const clases = {'equipoAntiguo': equipo.fundacion < 1900};

    return clases;
  }

  mostrarInfoEquipo(equipo: Equipo) {
    this.evtEmitter.emit(equipo);
  }

}
