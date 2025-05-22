import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
  decrementAmount: number;
  incrementAmount: number;
}

const initialState: CounterState = {
  value: 0,
  decrementAmount: 5,
  incrementAmount: 5,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
      state.decrementAmount = 5;
      state.incrementAmount = 5;
    },
    setIncrementAmount: (state, action) => {
      state.incrementAmount = action.payload;
    },
    setDecrementAmount: (state, action) => {
      state.decrementAmount = action.payload;
    },
    incrementByAmount: (state) => {
      state.value += state.incrementAmount;
    },
    decrementByAmount: (state) => {
      state.value -= state.decrementAmount;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  setIncrementAmount,
  setDecrementAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
