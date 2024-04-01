import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  currentUser: undefined,
  error: null,
  success: false,
};

interface userCreds {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  '/auth/login',
  async (userCreds: userCreds, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        { userCreds: userCreds },
        { withCredentials: true }
      );
      return response.data.userCreds;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {});
  },
});

export default userReducer;
