import React from 'react';

const ShowService = ({service}) => {
    console.log(service);
    return (
        <div className="col-md-4 float-left mt-2 mr-5 ml-5 bg-info p-2 rounded ">
            <div className="">
            <h6 className="mt-2">{service.service}</h6>
            <small>{service.Description}</small> 
            <br/>
            <button className="btn btn-success b mt-2">Pandding</button>
            </div>
           
        </div>
    );
};

export default ShowService;