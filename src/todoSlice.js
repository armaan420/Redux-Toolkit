import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    completed: (state, action) => {
      state.map((task) => {
        return task.id === action.payload && (task.completed = !task.completed);
      });
    },
    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    reset: (state) => {
      return (state = []);
    },
  },
});

export const { add, remove, completed, reset } = todoSlice.actions;
export default todoSlice.reducer;
