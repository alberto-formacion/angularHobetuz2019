package com.ipartek.api.escuelaAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ipartek.api.escuelaAPI.vo.Curso;

public interface CursoRepository extends JpaRepository<Curso, Integer>{

}
