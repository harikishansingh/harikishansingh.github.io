import React from 'react';

import NavBar from './components/Navbar/Navbar';
// import About from './components/About/About'
// import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
