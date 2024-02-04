import {createSlice} from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'stats',
  initialState: [],
  reducers: {
    addStats(state, action) {
      state.push(action.payload);
    },
  },
});

export const {addStats} = storeSlice.actions;

export default storeSlice.reducer;
