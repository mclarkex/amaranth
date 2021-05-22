import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LeftSidebarData } from './SidebarData';
import { RightSidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [leftsidebar, setLeftSidebar] = useState(false);
  const showLeftSidebar = () => setLeftSidebar(!leftsidebar);

  const [rightsidebar, setRightSidebar] = useState(true);
  const showRightSidebar = () => setRightSidebar(rightsidebar);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='nav-container' >
          <div className='center-navbar'> <h1> Header Bar </h1> </div>
          
          <div className='left-navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showLeftSidebar} />
            </Link>
          </div>
          
          <div className='right-navbar'>
            <Link to='#' className='right-menu-bars'>
              <FaIcons.FaArrowLeft onClick={showRightSidebar} />
            </Link>
          </div>
        </div>

          <nav className={leftsidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showLeftSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {LeftSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav className={rightsidebar ? 'right-nav-menu active' : 'right-nav-menu'}>
            <ul className='nav-menu-items' >
              {RightSidebarData.map((item, index) => {
                return (
                  <h1 key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </h1>
                );
              })}
            </ul>
          </nav>
          
        </IconContext.Provider>
    </>
  );
}

export default Navbar;
