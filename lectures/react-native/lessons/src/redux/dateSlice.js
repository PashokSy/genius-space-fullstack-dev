import {createSlice} from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'date',
  initialState: {},
  reducers: {
    changeDate(state, action) {
      Object.assign(state, {date: action.payload});
    },
  },
});

export const {changeDate} = dateSlice.actions;

export default dateSlice.reducer;
