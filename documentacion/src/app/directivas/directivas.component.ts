import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  valorParaMostrar: string = 'Este valor se declara en el Componente';
  valorDePropiedad: boolean = true;
  valorBidireccional: string = 'Valor inicial desde el componente'

  constructor() { }

  ngOnInit() {
  }

  accionEnComponente(){
    alert("accion desde el template al componente");
  }

}
