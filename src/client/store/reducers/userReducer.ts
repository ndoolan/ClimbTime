import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  currentUser: undefined,
  error: null,
  success: false,
};

interface loginCreds {
  username: string;
  password: string;
}

interface registerCreds {
  username: string;
  password: string;
  email: string;
}

export const login = createAsyncThunk(
  '/user/login',
  async (loginCreds: loginCreds, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        { loginCreds: loginCreds }
        // { withCredentials: true } // we haven't been assigned the cookie at this point
      );
      return response.data; // shouldn't we get an entire user obj from the DB
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const register = createAsyncThunk(
  '/user/register',
  async (registerCreds: registerCreds, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        registerCreds: registerCreds,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.success = true;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(register.pending, (state, _action) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.success = true;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userReducer;
