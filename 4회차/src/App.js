import React, { useState, useEffect } from 'react';
import {
  Container, Form, TextInput,
  SubmitInput, UnorderdList, ListItem,
  TodoText, TodoDelete } from './styledComponents'
import './App.css'

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);

  const handleSubmit = (todoText) => {
    setTodo([
      ...todo,
      {
        todoId: todoId,
        todoText: todoText,
        todoDone: false
      }
    ])
    setTodoId(todoId + 1)
  }

  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  const handleToggle = (todoId) => {
    setTodo(todo.map(item => item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item))
  }

  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"))

    if(!defaultTodo) return;

    setTodo(defaultTodo)
    if(defaultTodo.length !== 0 ){
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(e.target.todo.value)
        e.target.todo.value = ''
      }}>
        <TextInput type='text' placeholder='할일 쓰기' name='todo' />
        <SubmitInput type='submit' value='추가' />
      </Form>
      <UnorderdList>
        {todo.map((item, index) =>
        <ListItem key={index}>
          <TodoText onClick={() => handleToggle(item.todoId)} style={item.todoDone ? { textDecoration: 'line-through'} : {} }>
            {item.todoText}
          </TodoText>
          <TodoDelete onClick={() => handleDelete(item.todoId)}>X</TodoDelete>
        </ListItem>)}
      </UnorderdList>
    </Container>
  );
}