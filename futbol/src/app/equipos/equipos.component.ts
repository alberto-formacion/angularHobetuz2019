import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipo: Equipo;
  equipos: Array<Equipo>;
  equipoSeleccionado: Equipo;
  equipoBuscar: string;

  constructor() {}

  ngOnInit() {
    this.equipo = new Equipo('', '', 0, 0, 0);
    this.equipos = [];
  }

  addEquipo() {
    this.equipos.push(this.equipo);
    this.equipo = new Equipo('', '', 0, 0, 0);
  }
  modificarEstilos(equipo: Equipo) {
    const clases = {'equipoAntiguo': equipo.fundacion < 1900};

    return clases;
  }

  mostrarInfoEquipo(equipo: Equipo) {
    this.equipoSeleccionado = equipo;
  }
}
