package com.ipartek.api.escuelaAPI.service;

import java.util.List;

import com.ipartek.api.escuelaAPI.vo.Alumno;
import com.ipartek.api.escuelaAPI.vo.Curso;

public interface CursoService {

	public List<Curso> getCursos();
	public Curso getCursoById(Integer id);
	public List<Curso> updateCurso(Curso curso);
	public List<Curso> deleteCurso(Curso curso);
	public List<Curso> insertCurso(Curso curso);
	public List<Curso> insertInscripcion(Alumno alumno, Curso curso);
}
