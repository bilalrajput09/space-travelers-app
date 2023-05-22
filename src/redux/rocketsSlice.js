import { createSlice } from '@reduxjs/toolkit';
import fetchRocketsData from './rocketsActions';

const rocketsInitalState = {
  rocket: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: rocketsInitalState,
  reducers: {
    createReservation(state, action) {
      const rocketIndex = state.rocket.findIndex(
        (rocket) => rocket.id === action.payload,
      );
      const rocketActive = state.rocket[rocketIndex];
      rocketActive.reserved = !rocketActive.reserved;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsData.fulfilled, (state, action) => {
      state.rocket = [...action.payload];
    });
  },
});
export const rocketActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
