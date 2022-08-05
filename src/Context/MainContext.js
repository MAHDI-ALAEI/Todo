import  { createContext } from "react";

export default createContext({
    todoList: [] ,
    addTodo:{},
    deleteTodo : {},
    showEditTodo:{},
    editTodo:{},
    doneTodo:{},
    refEditInput :{} ,
    refList: {} ,
    refAddInput: {} ,
    editId : {},
})