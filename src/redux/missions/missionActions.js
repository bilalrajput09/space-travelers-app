import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const getAllMission = createAsyncThunk('mission/getMissions',
  async () => {
    try {
      const response = await fetch(url);
      const dataArray = [];
      const data = await response.json();

      data.map((item) => dataArray.push({
        mission_id: item.mission_id,
        mission_name: item.mission_name,
        description: item.description,
      }));
      return dataArray;
    } catch (error) {
      return error;
    }
  });

export default getAllMission;
