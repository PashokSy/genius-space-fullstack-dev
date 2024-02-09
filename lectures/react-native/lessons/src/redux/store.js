import {configureStore} from '@reduxjs/toolkit';
import statsSlice from './statsSlice';
import dateSlice from './dateSlice';
import termsSlice from './termsSlice';

export const store = configureStore({
  reducer: {
    stats: statsSlice,
    date: dateSlice,
    terms: termsSlice,
  },
});
