import React from 'react';
import { useEffect } from 'react';
import { usePageTitle } from '../../hooks/useTitle';

//Styles
import "./MainLayout.scss";

const MainLayout = ({ children, title, ...props }) => {
    const { rename } = usePageTitle()

    useEffect(() => {
        rename(title)
    }, [])

  return (
    <div className="main_layout">
        {children}
    </div>
  )
};

export default MainLayout;