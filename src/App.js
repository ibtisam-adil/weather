import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Detail from './components/details/Detail';
import { fetchWeatherData } from './redux/home/homeSlice';

function App() {
  const error = useSelector((state) => state.homeReducer.error);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              {isLoading && <div className="heading">Loading....</div>}
              {error && <p className="error">{error}</p>}
              {!isLoading && !error && (
                <>
                  <p className="heading">Popular Cities</p>
                  <div className="grid">
                    <Home />
                  </div>
                </>
              )}
            </>
          )}
        />
        <Route
          path="/details"
          element={(
            <div className="detail-page">
              <Detail />
            </div>
           )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
