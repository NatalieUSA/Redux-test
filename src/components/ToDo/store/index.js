import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import todoRe
