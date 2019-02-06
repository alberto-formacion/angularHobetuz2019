import { Jugador } from './../jugadores/jugador';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {

  @Input() jugadores: Array<Jugador>;

  constructor() { }

  ngOnInit() {
  }

}
