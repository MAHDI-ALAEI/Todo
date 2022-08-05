import React, { useContext } from "react"
import MainContext from "../Context/MainContext"

export default function AddTodo() {
    const {addTodo , refAddInput} = useContext(MainContext)
    
    return (

        <div className="AddBox">
            <div className="in">
                <input id="AddInput" type="text" autoFocus autoComplete="off" ref={refAddInput} />
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    )
}

