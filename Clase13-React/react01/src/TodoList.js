//rafc
// import React from 'react'

// export const TodoList = () => {
//     return (
//         <div>TodoList</div>
//     )
// }

//rafce
import React from 'react'

const TodoList = ({ todos }) => {

    return (
        <>
            <h1>TodoList</h1>
            <ol>
                {todos.map(todo =>
                    <li>{todo}</li>
                )}
            </ol>
        </>
    )
}

export default TodoList
