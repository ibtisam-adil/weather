import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { fetchWeatherData } from './redux/home/homeSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <p className="heading">Popular Cities</p>
      <div className="home-grid">
        <Home />
      </div>
    </div>
  );
}

export default App;
