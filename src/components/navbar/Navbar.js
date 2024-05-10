import React from 'react';
import './navbar.css';
import { MdOutlineStackedLineChart } from 'react-icons/md';

const Navbar = () => (
  <nav>
    <div className="nav-head">
      <MdOutlineStackedLineChart />
      <h3 className="nav-name">Weather360</h3>
    </div>
    <div className="input-with-icon">
      <input type="text" name="search" placeholder="Search City" required />
      <i className="bx bx-search-alt-2 input-icon" />
      <i className="bx bxs-microphone" />
    </div>
  </nav>
);

export default Navbar;
