import {  createSlice } from '@reduxjs/toolkit'


// Define your slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: { todos: [], error: null },
    reducers: {},
});

// Export the reducer
export default todoSlice.reducer;
