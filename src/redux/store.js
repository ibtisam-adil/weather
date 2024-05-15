import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailReducer from './details/detailSlice';

const store = configureStore({
  reducer: {
    homeReducer,
    detailReducer,
  },
});

export default store;
