import Todo from './Todo'

import React from 'react'

const TodoList = ({ todos, setTodos }) => {
    return (
        <>
            <h1>TodoList</h1>




            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}> </Todo>
            })}

        </>
    )
}

export default TodoList
