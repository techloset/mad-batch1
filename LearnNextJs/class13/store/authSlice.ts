import {  createSlice } from '@reduxjs/toolkit'


// Define your slice
const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, isLoggedIn: false, error: null, something:"new data" },
    reducers: {},
});

// Export the reducer
export default authSlice.reducer;
