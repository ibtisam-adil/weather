import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const detailSlice = createSlice({
  name: 'Details',
  initialState,
  reducers: {
    selectCity: (state, action) => ({ ...state, data: action.payload }),
  },
});

export const { selectCity } = detailSlice.actions;

export default detailSlice.reducer;
