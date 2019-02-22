package com.ipartek.api.escuelaAPI.repository;

import com.ipartek.api.escuelaAPI.vo.Alumno;
import com.ipartek.api.escuelaAPI.vo.Curso;

public interface InscripcionRepository{
	
	public void insertInscripcion(Alumno alumno, Curso curso);

}
