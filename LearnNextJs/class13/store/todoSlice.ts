import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../config/firebase";

// First, create the thunk
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  console.log("get todos method");

  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    let todosList = [];
    querySnapshot.forEach((doc) => {
      todosList.push({
        attachmentURL: doc.data()?.attachmentURL,
        description: doc.data()?.description,
        id: doc.id,
        createdAt: doc.data()?.createdAt,
      });
    });

    console.log("todos in action - slice", todosList);
    return todosList;
  } catch (error) {
    console.log("================catch====================");
    console.log(error);
    console.log("====================================");
  }
});


export const deleteTodo = createAsyncThunk('todos/delteTodo',async (item)=>{
    try {
        console.log("item found in thunk action", item);
        
      const response =  await deleteDoc(doc(db, "todos", item.id));
        return item
    } catch (error) {
       console.log("error", error);
        
    }

})

// Define your slice
const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], error: null },
  reducers: {
    updateTodo: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("add case in extra redyce", action.payload);
      let newState:any = {
        ...state,
        todos: action.payload,
      };
      return newState;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
        console.log("add case in extra redyce", action.payload);
        const todos = state.todos;
        const item = action.payload
        let filteredTodos = todos.filter((todo) => item.id !== todo.id)
        let newState:any = {
          ...state,
          todos: filteredTodos,
        };
        return newState;
      });


  },
});

export const { updateTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
