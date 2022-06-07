//ducks pattern 
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++ //immer
        },
        decrement(state) {
            state.value-- //immer
        },
        incrementByStep(state, action) {
            state.value += action.payload
        },
        reset(state) {
            state.value = 0;
        }
    }
})

export const { increment, decrement, incrementByStep, reset } = counterSlice.actions

export const incrementAsync = (step) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByStep(step))
    }, 4000)

}
export default counterSlice.reducer;