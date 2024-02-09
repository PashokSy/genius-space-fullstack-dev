import {createSlice} from '@reduxjs/toolkit';

const statsDateSlice = createSlice({
  name: 'statsDate',
  initialState: {},
  reducers: {
    addStatsDate(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const {addStatsDate} = statsDateSlice.actions;

export default statsDateSlice.reducer;
