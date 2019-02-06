package com.ipartek.api.todo.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todo")
public class Todo {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="todo")
	private String nombre;
	
	private boolean importante;
	private boolean terminada;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public boolean isImportante() {
		return importante;
	}
	public void setImportante(boolean importante) {
		this.importante = importante;
	}
	public boolean isTerminada() {
		return terminada;
	}
	public void setTerminada(boolean terminada) {
		this.terminada = terminada;
	}
	
	
}
