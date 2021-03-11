import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    completed: (state, action) => {
      state.list.map((task) =>
        task.id === action.payload ? (task.completed = !task.completed) : ""
      );
    },
    remove: (state) => {
      state.filter((task) => task.id !== task);
    },
    reset: (state) => {
      state.list = [];
    },
  },
});

export const { add, remove, completed, reset } = todoSlice.actions;
export default todoSlice.reducer;
