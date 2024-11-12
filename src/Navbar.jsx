import React from 'react';
import { MdOutlineSearch, MdOutlineLightMode } from "react-icons/md";
import './Style.css';

function Navbar() {
  return (
    <section className="main-navbar">
      <nav className="navbar">
        <h1 className="navbar-brand">FUTURE<span>PATH</span></h1>
        <ul>
          <li>
            <a href="#">News</a>
            <a href="#">List</a>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div class="navbar-extra">
          <div class="container-logo">
            <div id="search">
              <MdOutlineSearch size={25} />
            </div>
            <div id="light-theme">
              <MdOutlineLightMode size={25} />
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
  
}

export default Navbar;
