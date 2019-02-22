package com.ipartek.api.escuelaAPI.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipartek.api.escuelaAPI.repository.CursoRepository;
import com.ipartek.api.escuelaAPI.repository.InscripcionRepository;
import com.ipartek.api.escuelaAPI.service.CursoService;
import com.ipartek.api.escuelaAPI.vo.Alumno;
import com.ipartek.api.escuelaAPI.vo.Curso;

@Service
public class CursoServiceImpl implements CursoService{
	
	@Autowired
	CursoRepository cursoRepository;
	
	@Autowired
	InscripcionRepository inscripcionRepository;

	public List<Curso> getCursos() {
		return cursoRepository.findAll();
	}

	public Curso getCursoById(Integer id) {
		return cursoRepository.findById(id).get();
	}

	public List<Curso> updateCurso(Curso curso) {
		cursoRepository.save(curso);
		return cursoRepository.findAll();
	}

	public List<Curso> deleteCurso(Curso curso) {
		cursoRepository.delete(curso);
		return cursoRepository.findAll();
	}

	public List<Curso> insertCurso(Curso curso) {
		cursoRepository.save(curso);
		return cursoRepository.findAll();
	}

	public List<Curso> insertInscripcion(Alumno alumno, Curso curso) {
		inscripcionRepository.insertInscripcion(alumno, curso);
		return cursoRepository.findAll();
	}

}
