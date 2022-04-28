import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    //implementación de setCounter
    const increment = () => {
        setCounter(counter + 1)
    };
    //implementación de setCounter
    const decrement = () => {
        setCounter(counter - 1)
    }
    return {
        increment, decrement, counter
    }
}

//No epongo el setter (setCounter) sino la implementación de forma controlada