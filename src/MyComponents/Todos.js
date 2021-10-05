import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem"; // or "./TodoItem"

export const Todos = (props) => {
    let myStyle ={
        minHeight: "100vh",
        margin: "30px auto"
    }
    return (
        <div className="container my-3">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return (
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }


        </div>
    )
}
