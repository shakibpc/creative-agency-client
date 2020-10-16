import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faToolbox, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './SideBer.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';

const SideBer = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
           
            <ul className="list-unstyled">
            <div>
               <Link to='/'><img style={{height: "50px"}} src={Logo} alt=""/></Link> 
            </div>
            <li>
                    <Link to="/order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
            </li>
            <li>
                    <Link to="/serviceList" className="text-dark">
                        <FontAwesomeIcon icon={faToolbox} /> <span>Service List</span>
                    </Link>
            </li>
            <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
            </li>
            </ul>
        </div>
    );
};

export default SideBer;