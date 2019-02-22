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

import com.ipartek.api.escuelaAPI.service.AlumnoService;
import com.ipartek.api.escuelaAPI.vo.Alumno;

@RestController
@CrossOrigin(origins= {"http://localhost:4200/", "*"})
@RequestMapping("alumnos")
public class AlumnoController {
	
	@Autowired
	AlumnoService alumnoService;
	
	@GetMapping
	public List<Alumno> getAlumnos(){
		return alumnoService.getAlumnos();
	}
	
	@GetMapping(path="/{id}")
	public Alumno getAlumnoById(@PathVariable(value="id") Integer id) {
		return alumnoService.getAlumnoById(id);
	}
	
	@PutMapping
	public List<Alumno> updateAlumno(@RequestBody Alumno alumno){
		return alumnoService.updateAlumno(alumno);
		
	}
	
	@DeleteMapping
	public List<Alumno> deleteAlumno(@RequestBody Alumno alumno){
		return alumnoService.deleteAlumno(alumno);
	}
	
	@PostMapping
	public List<Alumno> insertAlumno(@RequestBody Alumno alumno){
		return alumnoService.insertAlumno(alumno);
	}

}
