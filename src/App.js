import React, { useRef, useState } from "react";

import AddTodo from "./Components/AddTodo";
import EditTodo from "./Components/EditTodo";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

import MainContext from "./Context/MainContext";



export default function App() {
  
  if (localStorage.getItem('todoList') == null) {
    localStorage.setItem('todoList', JSON.stringify([
      { name: 'This is first thing', id: 1, done: true },
      { name: 'Mahdi Alaei', id: 2, done: false },
    ]));
  }

  const [getTodoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')))
  const [getShowEditTodo, setShowEditTodo] = useState(false);
  const [getShowAddTodo, setShowAddTodo] = useState(true)
  const [getEditId, setEditId] = useState(null)

  const refEditInput = useRef(null)
  const refAddInput = useRef(null)
  const refList = useRef(null)

  localStorage.setItem('todoList', JSON.stringify(getTodoList));

  const doneTodo = (id) => {
    const todoList = [...getTodoList]
    const index = todoList.findIndex(e => id === e.id)
    todoList[index].done = ! todoList[index].done

    setTodoList(todoList)
  }
  const addTodo = () => {

    const input = refAddInput.current
    if (input.value !== "" && input.value !== " ") {
      let name = input.value
      const todoList = [...getTodoList]
      let id
      if (todoList.length !== 0) {
        id = todoList[todoList.length - 1].id

      }
      else {
        id = 0
      }


      let newTodo = {
        name: name,
        id: ++id,
        done: false,
      }
      todoList.push(newTodo)
      setTodoList(todoList)
      input.value = ""
      input.focus()
    }

  }

  const deleteTodo = id => {
    let todoList = [...getTodoList]
    todoList = todoList.filter(e => id !== e.id)
    setTodoList(todoList)
    setShowEditTodo(false)
    setShowAddTodo(true)

  }

  const showEditTodo = (id) => {
    setShowEditTodo(true)
    setShowAddTodo(false)
    setEditId(id)



  }
  const editTodo = () => {
    const input = refEditInput.current
    if (input.value !== '') {
      let name = input.value
      let todoList = [...getTodoList]
      const id = getEditId
      const index = todoList.findIndex(e => id === e.id)
      todoList[index].name = name

      setTodoList(todoList)
      setShowEditTodo(false)
      setEditId(null)
      setShowAddTodo(true)


    }


  }




  return (
    <MainContext.Provider value={{
      todoList: getTodoList,
      showEditTodo: showEditTodo,
      addTodo: addTodo,
      deleteTodo: deleteTodo,
      editTodo: editTodo,
      doneTodo: doneTodo,
      refEditInput: refEditInput,
      refAddInput: refAddInput,
      refList: refList,
      editId: getEditId ,
    }}>

      <>
        <div className="Box">
          <Header />
          <TodoList />
          {getShowAddTodo && <AddTodo />}
          {getShowEditTodo && <EditTodo />}
          

        </div>
      </>
    </MainContext.Provider>

  )



}













