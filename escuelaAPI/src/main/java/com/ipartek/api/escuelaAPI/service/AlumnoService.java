package com.ipartek.api.escuelaAPI.service;

import java.util.List;

import com.ipartek.api.escuelaAPI.vo.Alumno;

public interface AlumnoService {
	
	public List<Alumno> getAlumnos();
	public Alumno getAlumnoById(Integer id);
	public List<Alumno> updateAlumno(Alumno alumno);
	public List<Alumno> deleteAlumno(Alumno alumno);
	public List<Alumno> insertAlumno(Alumno alumno);

}
