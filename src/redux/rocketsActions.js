import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRocketsData = createAsyncThunk('fetch/rockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');

  const data = await response.json();

  const modifiedArray = data.map((obj) => ({
    id: obj.rocket_id,
    name: obj.rocket_name,
    type: obj.rocket_type,
    description: obj.description,
    flickr_image: obj.flickr_images[0],
    reserved: false,
  }));

  return modifiedArray;
});

export default fetchRocketsData;
