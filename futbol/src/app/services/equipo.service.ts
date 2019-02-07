import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Array<Equipo>;

  constructor() {
    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 1898, 40000, 300, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png'),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 1899, 90000, 200,
        'https://cdn.icon-icons.com/icons2/104/PNG/256/fc_barcelona_footballteam_18015.png'),
      new Equipo('Celta de Vigo', 'Vigo', 1930, 15000, 150, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/celta-de-vigo_109482.png')
    ];
  }

  getEquipos() {
    return this.equipos;
  }

  addEquipo(equipo: Equipo) {
    this.equipos = [...this.equipos, equipo];
  }
}
