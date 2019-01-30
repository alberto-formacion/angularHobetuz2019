import { Component, OnInit, Input } from '@angular/core';
import { Objeto } from '../model/objeto';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  @Input() public obj: Objeto;

  constructor() { }

  ngOnInit() { }

}
