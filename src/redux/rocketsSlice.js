import { createSlice } from '@reduxjs/toolkit';
import fetchRocketsData from './rocketsActions';

const rocketsInitalState = {
  rocket: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: rocketsInitalState,
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, action) => {
      state.rocket = [...action.payload];
    });
  },
});

export default rocketsSlice.reducer;
