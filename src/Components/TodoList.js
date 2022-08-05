import { useContext } from "react";
import MainContext from "../Context/MainContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoList() {
    const context = useContext(MainContext)
    return (
        <ul className="TodoList">
            {context.todoList.map((e) => {
                
                return (
                    <li className={context.editId === e.id ?"TodoList__Item TodoList__Item_Edit" : "TodoList__Item "} key={e.id} ref={context.editId === e.id ? context.refList : null}  >
                        <div className="TodoList__Item__Name">
                            <input id={'checkBox'+ e.id} type="checkbox" className="checkBox" checked={e.done} onChange={() => context.doneTodo(e.id)}/>
                            <label htmlFor={'checkBox'+ e.id} className="checkBoxLabel">{e.name}</label>
                            
                        </div>
                        <div className="TodoList__Item__ToolsBox">
                            <span onClick={event => context.showEditTodo(e.id, event)} className="me-2 TodoList__Item__ToolsBox__Icon"><FontAwesomeIcon icon={faPen} /></span>
                            <span onClick={() => context.deleteTodo(e.id)} className="TodoList__Item__ToolsBox__Icon" ><FontAwesomeIcon icon={faTrashAlt} /></span> 
                        </div>
                    </li>
                )
            })}
        </ul>


    )


}


