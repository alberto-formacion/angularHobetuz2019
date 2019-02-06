import { Injectable } from '@angular/core';
import { Jugador } from '../jugadores/jugador';
import { Equipo } from '../equipos/equipo';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  jugadores: Array<Jugador>;

  constructor() {
    this.jugadores = [
      new Jugador('Julen', 'Guerrero', 'Centrocampista', 25, 8, 'Athletic Club'),
      new Jugador('Lionel', 'Messi', 'Delantero', 31, 10, 'Futbol Club Barcelona'),
      new Jugador('Claude', 'Makelele', 'Centrocampista', 28, 6, 'Celta de Vigo')
    ];
  }

  getJugadores(): Array<Jugador> {
    return this.jugadores;
  }

  getJugadoresByEquipo(equipo: Equipo): Array<Jugador> {
    return this.jugadores.filter(jugador => jugador.equipo.toLowerCase() === equipo.nombre.toLowerCase());
  }
}
