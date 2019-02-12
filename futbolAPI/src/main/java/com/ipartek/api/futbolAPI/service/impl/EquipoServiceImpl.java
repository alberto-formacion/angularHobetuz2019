package com.ipartek.api.futbolAPI.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ipartek.api.futbolAPI.repository.EquipoRepository;
import com.ipartek.api.futbolAPI.service.EquipoService;
import com.ipartek.api.futbolAPI.vo.Equipo;

public class EquipoServiceImpl implements EquipoService{
	
	@Autowired
	EquipoRepository equipoRepository;

	@Override
	public List<Equipo> getEquipos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Equipo> getEquipoById(Equipo equipo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Equipo> addEquipo(Equipo equipo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Equipo> updateEquipo(Equipo equipo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Equipo> deleteEquipo(Equipo equipo) {
		// TODO Auto-generated method stub
		return null;
	}

}
