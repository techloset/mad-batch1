import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../config/firebase";

export const fetchCurrentUser = createAsyncThunk(
    "auth/checkUSerSignIn",
    async () => {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("onAuthStateChanged", user);
            
            resolve(user);
          } else {
            resolve(false);
          }
        });
        unsubscribe();
      });
    }
  );

export const doSignup = createAsyncThunk("auth/signup", async (item) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      item.email,
      item.password
    );
    console.log("signup user", user);
    return user;
  } catch (error) {
    console.log("error", error);
  }
});

export const doLogin = createAsyncThunk("auth/login", async (item) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      item.email,
      item.password
    );
    console.log("login user", user);
    return user;
  } catch (error) {
    console.log("error", error);
  }
});

// Define your slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
    something: "new data",
    singupUser: {},
    currentUserRequestLoader: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSignup.fulfilled, (state, action) => {
      let newState: any = {
        ...state,
        singupUser: action.payload,
      };
      console.log("newState after signup", newState);

      return newState;
    });

    builder.addCase(doLogin.fulfilled, (state, action) => {
      if (action.payload?.user) {
        let newState: any = {
          ...state,
          user: action.payload?.user,
          isLoggedIn: true
        };
        console.log("newState after login", newState);

        return newState;
      }

      return {
        ...state
      };
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
        console.log("newState after current user start", action);
        
      if (action.payload) {
        let newState: any = {
          ...state,
          user: action.payload?.user,
          isLoggedIn: true,
          currentUserRequestLoader: false
        };
        console.log("newState after current user", newState);

        return newState;
      }

      return {
        ...state,
        currentUserRequestLoader: false
      };
    });
  },
});

// Export the reducer
export default authSlice.reducer;
