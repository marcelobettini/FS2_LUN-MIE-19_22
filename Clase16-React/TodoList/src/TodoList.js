import Todo from './Todo'

import React from 'react'

const TodoList = ({ todos, setTodos, setId, setEditMode, todoRef, btnRef }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>tarea</th>
                        <th>finalizada</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                                setId={setId}
                                setEditMode={setEditMode}
                                todoRef={todoRef}
                                btnRef={btnRef}
                            />
                        );
                    })}
                </tbody>
            </table>


            {/* <h1>TodoList</h1>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}> </Todo>
            })} */}

        </>
    )
}

export default TodoList
