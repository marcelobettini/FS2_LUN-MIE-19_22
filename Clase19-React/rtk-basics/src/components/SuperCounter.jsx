import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByStep, incrementAsync } from '../features/counterSlice'

const SuperCounter = () => {
    const [incrementStep, setIncrementStep] = useState(3)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
            <p>count is: {count}</p>
            <input
                type="number"
                aria-label="Increment step value"
                value={incrementStep}
                onChange={(e) => setIncrementStep(+e.target.value)}
            />
            <button aria-label="Increment by step" onClick={() => dispatch(incrementByStep(incrementStep || 0))}>Add by Step</button>
            <button className='asyncButton' aria-label="Async increment by step" onClick={() => dispatch(incrementAsync(incrementStep || 0))}>Async Add by Step</button>


        </>
    )
}

export default SuperCounter