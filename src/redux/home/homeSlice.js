import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const key = '9f9751fc4182e0a06056f8ccced0363f';
const url = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = createAsyncThunk('weather/fetchData', async (city) => {
  const cities = city ? [city] : ['Rome', 'london', 'islamabad', 'Washington, D.C', 'Ottawa', 'Tokyo', 'Edinburgh', 'Beijing', 'Stockholm'];
  const requests = cities.map((city) => {
    const params = {
      q: city,
      appid: key,
      units: 'metric',
    };
    return axios.get(url, { params });
  });
  try {
    const responses = await Promise.all(requests);
    const weatherData = responses.map((response) => response.data);
    return weatherData;
  } catch {
    throw new Error('City not found. Please enter the correct city name.');
  }
});

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => ({ ...state, isLoading: true, error: null }))
      .addCase(fetchWeatherData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      }))
      .addCase(fetchWeatherData.rejected, (state, action) => ({
        ...state, data: [], isLoading: false, error: action.error.message,
      }));
  },
});

export const { data, isLoading } = homeSlice.actions;
export default homeSlice.reducer;
