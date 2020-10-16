import React, { useContext, useEffect, useState } from 'react';
import SideBer from '../SideBer/SideBer';
import './ServiceList.css';
import { UserContext } from '../../../App';
import ShowService from '../ShowService/ShowService';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    console.log(order);
    
    useEffect( () =>{
        fetch('http://localhost:5000/showService?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])

    return (
        <main className="row d-flex align-items-top">
            <div className="col-md-2 offset-md-1">
                <SideBer></SideBer>
            </div>
            <div className=" col-md-8 form-order float-left">
                {
                    order.map((service) => (
                        <ShowService service={service}></ShowService>
                      ))
                }
            </div>
        </main >
    );
};

export default ServiceList;