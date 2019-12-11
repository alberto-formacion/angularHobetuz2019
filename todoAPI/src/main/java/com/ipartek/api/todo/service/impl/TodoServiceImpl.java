package com.ipartek.api.todo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipartek.api.todo.repository.TodoRepository;
import com.ipartek.api.todo.service.TodoService;
import com.ipartek.api.todo.vo.Todo;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	TodoRepository todoRepository;

	@Override
	public List<Todo> getAll() {
		return todoRepository.findAll();
	}

	@Override
	public List<Todo> addTodo(Todo todo) {
		todoRepository.save(todo);
		return todoRepository.findAll();
	}

	@Override
	public List<Todo> finalizeTodo(Todo todo) {
		todo.setTerminada(!todo.isTerminada());
		todoRepository.save(todo);
		return todoRepository.findAll();
	}

}
