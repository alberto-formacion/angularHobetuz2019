package com.ipartek.api.escuelaAPI.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipartek.api.escuelaAPI.repository.AlumnoRepository;
import com.ipartek.api.escuelaAPI.service.AlumnoService;
import com.ipartek.api.escuelaAPI.vo.Alumno;

@Service
public class AlumnoServiceImpl implements AlumnoService{
	
	@Autowired
	AlumnoRepository alumnoRepository;

	public List<Alumno> getAlumnos() {
		return alumnoRepository.findAll();
	}

	public Alumno getAlumnoById(Integer id) {
		return alumnoRepository.findById(id).get();
	}

	public List<Alumno> updateAlumno(Alumno alumno) {
		alumnoRepository.save(alumno);
		return alumnoRepository.findAll();
	}

	public List<Alumno> deleteAlumno(Alumno alumno) {
		alumnoRepository.delete(alumno);
		return alumnoRepository.findAll();
	}

	public List<Alumno> insertAlumno(Alumno alumno) {
		alumnoRepository.save(alumno);
		return alumnoRepository.findAll();
	}

}
