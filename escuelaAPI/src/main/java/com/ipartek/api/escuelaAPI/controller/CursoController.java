package com.ipartek.api.escuelaAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.api.escuelaAPI.service.CursoService;
import com.ipartek.api.escuelaAPI.vo.Curso;

@RestController
@CrossOrigin(origins= {"http://localhost:4200/", "*"})
@RequestMapping("/cursos")
public class CursoController {
	
	@Autowired
	CursoService cursoService;
	
	@GetMapping
	public List<Curso> getCursos(){
		return cursoService.getCursos();
	}
	
	@GetMapping("/{id}")
	public Curso getCursoById(@PathVariable(value="id") Integer id) {
		return cursoService.getCursoById(id);
	}
	
	@PutMapping
	public List<Curso> updateCurso(@RequestBody Curso curso){
		return cursoService.updateCurso(curso);
	}
	
	@DeleteMapping
	public List<Curso> deleteCurso(@RequestBody Curso curso){
		return cursoService.deleteCurso(curso);
	}
	
	@PostMapping
	public List<Curso> insertCurso(@RequestBody Curso curso){
		return cursoService.insertCurso(curso);
	}

}
