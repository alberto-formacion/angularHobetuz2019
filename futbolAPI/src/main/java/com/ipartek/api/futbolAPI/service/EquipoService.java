package com.ipartek.api.futbolAPI.service;

import java.util.List;

import com.ipartek.api.futbolAPI.vo.Equipo;

public interface EquipoService {
	
	public List<Equipo> getEquipos();
	public List<Equipo> getEquipoById(Equipo equipo);
	public List<Equipo> addEquipo(Equipo equipo);
	public List<Equipo> updateEquipo(Equipo equipo);
	public List<Equipo> deleteEquipo(Equipo equipo);

}
