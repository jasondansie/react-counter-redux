import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'conter',
    initialState: {
        value: 1000,
    },
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
        reset: (state, action) => {
            state.value = 0;
        },
    },
});

export const { incrementByAmount, reset, decrementByAmount } = counterSlice.actions; // connecting with the action
export const selectCounter = (state) => state.counter.value // to show the value

export default counterSlice.reducer; //for the store