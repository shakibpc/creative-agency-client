
import React, {useEffect, useState } from 'react';
import AdminSideber from '../../AdminSideber/AdminSideber';
import ShowAllService from '../ShowAllService/ShowAllService';
import './ServiceListAll.css';

const ServiceListAll = () => {
   
    const [allOrder, setAllOrder] = useState([]);
    console.log(allOrder);
    
    useEffect( () =>{
        fetch('http://localhost:5000/showServiceAll')
        .then(res => res.json())
        .then(data => setAllOrder(data));
    }, [])
    return (
        <main className="row d-flex align-items-top">
            <div className="col-md-2 offset-md-1">
                <AdminSideber></AdminSideber>
            </div>
            <div className=" form-order">
                {
                    allOrder.map((info) => (
                        <ShowAllService info={info}></ShowAllService>
                      ))
                }
            </div>
        </main>
    );
};

export default ServiceListAll;