import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
  }

  ngOnInit() {
    this.usuario = new Usuario('', '', '', '', 0);
    this.usuarios = [];
  }

  guardarUsuario() {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario('', '', '', '', 0);
  }

}
