import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/greetings';

const initialState = {
  greetings: [],
  isLoading: true,
  error: undefined,
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.greetings = action.payload;
      state.isLoading = false;
    },
  },
});

export default greetingsSlice.reducer;
