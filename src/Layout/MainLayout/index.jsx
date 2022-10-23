import React from 'react';

//Styles
import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main_layout">
        {children}
    </div>
  )
};

export default MainLayout;