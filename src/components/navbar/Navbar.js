import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineStackedLineChart } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchWeatherData } from '../../redux/home/homeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandle = (value) => {
    navigate('/');
    dispatch(fetchWeatherData(value));
  };
  const [value, setvalue] = useState('');

  return (
    <nav>
      <div className="nav-head">
        <MdOutlineStackedLineChart />
        <h3 className="nav-name">Weather360</h3>
      </div>
      <div className="input-with-icon">
        <input
          type="text"
          name="search"
          placeholder="Search City"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              clickHandle(value);
            }
          }}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          required
        />
        <span className=".input-with-icon">
          <IoSearch className="input-icon" onClick={() => clickHandle(value)} />
        </span>
        <i className="bx bxs-microphone" />
      </div>
    </nav>
  );
};

export default Navbar;
