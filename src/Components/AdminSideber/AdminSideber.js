import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faToolbox, faMale, faHandPaper } from '@fortawesome/free-solid-svg-icons'
import './AdminSideber.css';
import { Link } from 'react-router-dom';
import Logo from '../../../src/images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminSideber = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])

    return (
        <div>
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
          
           <ul className="list-unstyled">
        <div>
           <Link to='/'><img style={{height: "50px"}} src={Logo} alt=""/></Link> 
        </div>
            
        {isAdmin && <div>
         <li>
                <Link to="/admin/stop" className="text-dark">
                    <FontAwesomeIcon icon={faHandPaper} /> <span>Stop</span>
                </Link>
        </li>
        <li>
                <Link to="/admin/serviceList" className="text-dark">
                    <FontAwesomeIcon icon={faToolbox} /> <span>Service List</span>
                </Link>
        </li>
        <li>
                <Link to="/admin/addService" className="text-dark">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
        </li>
        <li>
                <Link to="/admin/addAdmin" className="text-dark">
                    <FontAwesomeIcon icon={faMale} /> <span>Make Admin</span>
                </Link>
        </li>
        </div>}
        </ul>
    </div>
    </div>
    );
};

export default AdminSideber;