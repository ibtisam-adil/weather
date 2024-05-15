import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCity } from '../../redux/details/detailSlice';
import './home.css';
import clear from '../../assets/clear.png';
import clouds from '../../assets/clouds.png';
import drizzle from '../../assets/drizzle.png';
import dust from '../../assets/dust.png';
import fog from '../../assets/fog.png';
import haze from '../../assets/haze.png';
import mist from '../../assets/mist.png';
import rain from '../../assets/rain.png';
import smoke from '../../assets/smoke.png';
import snow from '../../assets/snow.png';
import thunderstorm from '../../assets/thunderstorm.png';

const weatherImages = {
  clear,
  clouds,
  drizzle,
  dust,
  fog,
  haze,
  mist,
  rain,
  smoke,
  snow,
  thunderstorm,
};

const Home = () => {
  const weatherData = useSelector((state) => state.homeReducer.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ClickHandler = (weatherImage, city) => {
    dispatch(selectCity({ weatherImage, city }));
    navigate('/details');
  };

  return (
    <>
      {weatherData.map((city) => {
        const weatherCondition = city.weather[0].main.toLowerCase();
        const weatherImage = weatherImages[weatherCondition];
        return (
          <div
            className="home-city"
            key={city.id}
            tabIndex={0}
            onClick={() => ClickHandler(weatherImage, city)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/details');
              }
            }}
            role="button"
          >
            <div className="weather-detail">
              <img
                className="weather-logo"
                src={weatherImage}
                alt={city.name}
              />
              <div>
                <p className="temperature">
                  {city.main.temp}
                  <sup className="small">°c</sup>
                </p>
                <p className="condition">{city.weather[0].main}</p>
              </div>
            </div>
            <div className="city-country">
              <p className="name">{city.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
