import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMessages = createAsyncThunk('greetings/fetch', async () => {
  const response = await fetch('http://localhost:3000/api/v1/messages');
  const data = await response.json();
  const { greeting } = data;
  return greeting;
});

const initialState = { loading: false, greeting: '', error: '' };

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const newState = { ...state, greeting: action.payload, loading: false };
      return newState;
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      const newState = { ...state, greeting: '', error: action.error.message };
      return newState;
    });
  },
});

export default greetingSlice.reducer;
