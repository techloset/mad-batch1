import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
       todos: todoSlice,
       auth: authSlice,
    }
});


export default store;
