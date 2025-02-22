import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./components/Todos/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
