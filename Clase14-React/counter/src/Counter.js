import { useCounter } from "./hooks/useCounter"
import './App.css';

function Counter() {
  const { increment, decrement, counter } = useCounter()


  return (
    <>
      <h1>Mi contador con hook personalizado</h1>
      <p style={{ fontSize: "2rem" }}>{counter}</p>
      <button onClick={increment} style={{ height: "3em", width: "3em" }}>+</button>
      <button onClick={decrement} style={{ height: "3em", width: "3em" }}>-</button>
    </>

  );
}

export default Counter;
