import { useContext , useEffect } from "react"
import MainContext from "../Context/MainContext"


export default function EditTodo() {
    const {editTodo , refEditInput , refList} = useContext(MainContext)

    useEffect(() => {
        refEditInput.current.focus()
        refEditInput.current.value = refList.current.innerText
    });


    return (

        <div className="AddBox">
            <div className="in">
                <input id="EditInput" type="text" autoComplete="off" ref={refEditInput} />
                <button onClick={editTodo}>Edit</button>
            </div>
        </div>
    )
}