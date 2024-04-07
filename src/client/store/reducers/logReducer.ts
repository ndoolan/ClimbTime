import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialLogState = {
  isLoading: false,
  currentUserLogs: undefined,
  error: null,
  success: false,
};

interface initialLogState {
  isLoading: boolean;
  currentUserLogs: undefined | log[];
  error: null;
  success: false;
}

interface log {
  name: string;
  grade: string;
  location: string;
  flash: boolean;
  attempts?: number;
  comments?: string;
}
