import React from "react";
import TodoList from "./TodoList"
function App() {
  const todos = ["buy milk", "buy almonds", "stop buying things"]
  const element = <h1>Hello World</h1>
  return (
    <>
      {element}
      <TodoList todos={todos} />
    </>
  )
}
export default App;
