import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        todoSlice: todoSlice,
       auth: authSlice,
    }
});


export default store;
