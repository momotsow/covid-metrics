import { configureStore } from '@reduxjs/toolkit';
import { covidReducer } from './covid/reducer';

const store = configureStore({
  reducer: {
    details: covidReducer,
  },
});

export default store;
