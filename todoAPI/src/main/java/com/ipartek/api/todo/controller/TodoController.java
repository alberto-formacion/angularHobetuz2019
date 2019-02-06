package com.ipartek.api.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ipartek.api.todo.service.TodoService;
import com.ipartek.api.todo.vo.Todo;

@RestController
@CrossOrigin(origins= {"http://localhost:4200/", "*"})
@RequestMapping("/todos")
public class TodoController {
	
	@Autowired
	TodoService todoService;

	@GetMapping
	@CrossOrigin(origins= {"http://localhost:4200/", "*"})
	public List<Todo> getAll(){
		return todoService.getAll();
	}
	
	@PostMapping
	public List<Todo> addTodo(@RequestBody Todo todo){
		return todoService.addTodo(todo);
	}
	
	@PutMapping
	public List<Todo> finalizeTodo(@RequestBody Todo todo){
		return todoService.finalizeTodo(todo);
	}
}
