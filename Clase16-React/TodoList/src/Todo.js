import React from "react";
const Todo = ({ todo, todos, setTodos, setId, setEditMode, todoRef, btnRef }) => {
    const toggleCompleted = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }
    const setForEdit = (id) => {
        setId(id);
        setEditMode(true);
        todoRef.current.value = todo.description
        btnRef.current.innerText = "Cambiar Tarea"
    }

    return (
        <tr>
            <td>{todo.description}</td>
            <td>{todo.completed ? "si" : "no"}</td>
            <td>
                <button className="btn btn-sm btn-warning" onClick={toggleCompleted}>mark</button>
                <button className="btn btn-sm btn-success" onClick={() => setForEdit(todo.id)}>edit</button>
            </td>
        </tr >
    )
}

export default Todo