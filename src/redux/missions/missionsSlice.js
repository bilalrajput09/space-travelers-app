import { createSlice } from '@reduxjs/toolkit';
import getAllMission from './missionActions';

const missionsState = {
  missions: [],
};
const missionsSlice = createSlice({
  name: 'mission',
  initialState: missionsState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    },
    leaveMission: (state, { payload }) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: {
    [getAllMission.fulfilled]: (state, { payload }) => {
      state.missions = [...payload];
    },
  },
});
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
