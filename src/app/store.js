import { configureStore } from '@reduxjs/toolkit';
import UseReducer from '../features/UseSlice';
export const store = configureStore({
  reducer: {
    user:UseReducer ,
  },
});
