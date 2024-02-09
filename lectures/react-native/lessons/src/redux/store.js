import {configureStore} from '@reduxjs/toolkit';
import statsSlice from './statsSlice';
import dateSlice from './dateSlice';
import termsSlice from './termsSlice';
import statsDateSlice from './statsDateSlice';

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    statsDate: statsDateSlice,
    date: dateSlice,
    terms: termsSlice,
  },
});
