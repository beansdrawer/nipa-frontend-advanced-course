import React, { useState, useEffect } from 'react';
import {
  Container, Form, TextInput,
  SubmitInput, UnorderdList, ListItem,
  TodoText, TodoDelete } from './styledComponents'
import './App.css'


export default function App() {
  const [todo, setTodo] = useState([]); // 할일을 저장할 배열 상태
  const [todoId, setTodoId] = useState(0); // 할일마다 지정할 식별값 관리용 상태

  // 입력창에 입력된 값을 받아서 할일을 갱신하는 함수 
  const handleSubmit = (todoText) => {
    setTodo([
      ...todo,
      {
        todoId: todoId, // 이 할일의 고유한 id 값(숫자)
        todoText: todoText, //  이 할일의 실제 내용 
        todoDone: false // 이 할일의 완료 여부 
      }
    ])
    setTodoId(todoId + 1) // 다음 추가될 할일을 위해 id 값 변경
  }
  // 내가 클릭한 할일의 id만 확인해서 해당 할일만 없애기(걸러내기)
  const handleDelete = (todoId) => {
    setTodo(todo.filter(item => item.todoId !== todoId))
  }

  // 내가 클릭한 할일의 id만 확인해서 해당 할일만 완료여부 변경하기
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
  }, []) // 최초 한번만 동작하는 함수 지정하기 

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo]) // todo가 갱신될 때마다 동작할 함수 지정하기 

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault() // 서버 없이 작업할 것임!
        handleSubmit(e.target.todo.value) // 입력된 값을 함수에 전달
        e.target.todo.value = ''
      }}>
        <TextInput type='text' placeholder='할일 쓰기' name='todo' />
        <SubmitInput type='submit' value='추가' />
      </Form>
      <UnorderdList>
        {todo.map((item, index) =>
        <ListItem key={index}>
          {/* TodoText는 할일 내용 표시 태그 */}
          <TodoText onClick={() => handleToggle(item.todoId)} style={item.todoDone ? { textDecoration: 'line-through'} : {} }>
            {item.todoText}
          </TodoText>
          
          {/* TodoDelete는 할일 삭제용 X 표시 태그 */}
          <TodoDelete onClick={() => handleDelete(item.todoId)}>X</TodoDelete>
        </ListItem>)}
      </UnorderdList>
    </Container>
  );
}
