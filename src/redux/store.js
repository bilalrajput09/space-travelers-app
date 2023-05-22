import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsSlice';
import rocketsSlice from './rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsSlice
  },
});

export default store;
