import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navber from '../Navber/Navber';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;