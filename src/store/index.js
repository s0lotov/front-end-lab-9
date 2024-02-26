import { configureStore } from '@reduxjs/toolkit';
import doReducer from './doSlice';
import dateTimeReducer from './dateTimeSlice';

const store = configureStore({
    reducer: {
        logo: doReducer, 
        dateTime: dateTimeReducer,
      },
});

export default store;