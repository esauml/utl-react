import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import RouterConfig from './Routes';
import { memo } from 'react';
import NavBar from './NavBar';

const App = ({ }) => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <RouterConfig />
      </div>
    </BrowserRouter >
  );
};

export default memo(App);