package com.ipartek.api.futbolAPI.vo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="equipos")
public class Equipo {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Integer id;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}
