import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: Array<Equipo>;
  equipoSeleccionado: Equipo;
  equipoBuscar: string;
  formularioEquipos: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formularioEquipos = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      fundacion: [0, [Validators.required]],
      socios: [0, [Validators.required]],
      penas: [0, [Validators.required]],
      imagen: ['https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png', [Validators.required]]
    });

    this.equipos = [
      new Equipo('Athletic Club', 'Bilbao', 1898, 40000, 300, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png'),
      new Equipo('Futbol Club Barcelona', 'Barcelona', 1899, 90000, 200,
        'https://cdn.icon-icons.com/icons2/1637/PNG/256/barcelona_109494.png'),
      new Equipo('Celta de Vigo', 'Vigo', 1930, 15000, 150, 'https://cdn.icon-icons.com/icons2/1637/PNG/256/celta-de-vigo_109482.png')
    ];
  }

  addEquipo(equipo: Equipo) {
    this.equipos = [...this.equipos, equipo];

    this.formularioEquipos.reset();
  }

  guardarEquipo() {
    const equipo = new Equipo(
      this.formularioEquipos.controls.nombre.value,
      this.formularioEquipos.controls.ciudad.value,
      this.formularioEquipos.controls.fundacion.value,
      this.formularioEquipos.controls.socios.value,
      this.formularioEquipos.controls.penas.value,
      this.formularioEquipos.controls.imagen.value
    );

    this.addEquipo(equipo);
  }

  recogerEquipo(equipo: Equipo) {
    this.equipoSeleccionado = equipo;
  }
}
