package com.ipartek.api.todo.service;

import java.util.List;

import com.ipartek.api.todo.vo.Todo;

public interface TodoService {

	public List<Todo> getAll();
	public List<Todo> addTodo(Todo todo);
	public List<Todo> finalizeTodo(Todo todo);
}
