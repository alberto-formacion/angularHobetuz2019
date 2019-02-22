package com.ipartek.api.escuelaAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.api.escuelaAPI.service.CursoService;
import com.ipartek.api.escuelaAPI.vo.Curso;
import com.ipartek.api.escuelaAPI.vo.Inscripcion;

@RestController
@CrossOrigin(origins= {"http://localhost:4200/", "*"})
@RequestMapping("inscripciones")
public class InscripccionController {
	
	@Autowired
	CursoService cursoService;

	@PostMapping
	public List<Curso> insertInscripcion(@RequestBody Inscripcion inscripcion){
		//return cursoService.insertInscripcion(alumno,curso);
		return cursoService.insertInscripcion(inscripcion.getAlumno(),inscripcion.getCurso());
	}
}
