import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './missions/missionsSlice';
import rocketsSlice from './rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
