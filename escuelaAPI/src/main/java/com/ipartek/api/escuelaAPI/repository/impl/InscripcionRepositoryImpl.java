package com.ipartek.api.escuelaAPI.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ipartek.api.escuelaAPI.repository.InscripcionRepository;
import com.ipartek.api.escuelaAPI.vo.Alumno;
import com.ipartek.api.escuelaAPI.vo.Curso;

@Repository
public class InscripcionRepositoryImpl implements InscripcionRepository {
	
    @PersistenceContext
    private EntityManager entityManger;

	@Override
	@Transactional(readOnly=false)
	public void insertInscripcion(Alumno alumno, Curso curso) {
		Query q = entityManger.createNativeQuery("Insert into alumnos_cursos (alumnos_id, cursos_id) values ("+alumno.getId()+","+curso.getId()+")");
		q.executeUpdate();
	}

}
