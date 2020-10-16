import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
const Navber = () => {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-end">
        <div> 
            <img className="mt-3" style={{height: '40px'}}src={Logo} alt=""/>
        </div>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active ">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active ">
                <a class="nav-link" href="/admin/stop">Admin Dashboard <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active ">
                <a class="nav-link" href="/order">User Dashboard <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Our Portfolio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Our Team <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Contact Us <span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
        </nav>
        </div>
    );
};

export default Navber;