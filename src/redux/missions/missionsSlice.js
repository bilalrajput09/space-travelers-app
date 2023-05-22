import { createSlice } from '@reduxjs/toolkit';
import getAllMission from './missionActions';

const initialState = {
  missions: [],
};
const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducer: {

  },
  extraReducers: {
    [getAllMission.fulfilled]: (state, { payload }) => {
      state.missions = payload;
    },
  },
});
export const missionAction = missionsSlice.actions;
export default missionsSlice.reducer;
