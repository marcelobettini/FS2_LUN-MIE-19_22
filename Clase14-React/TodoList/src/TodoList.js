//rafc
// import React from 'react'

// export const TodoList = () => {
//     return (
//         <div>TodoList</div>
//     )
// }

import Todo from './Todo'
//rafce
import React from 'react'

const TodoList = ({ todos }) => {
    return (
        <>
            <h1>TodoList</h1>

            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo}> </Todo>
            })}

        </>
    )
}

export default TodoList
