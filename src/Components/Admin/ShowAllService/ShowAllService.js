import React from 'react';


const ShowAllService = ({info}) => {
    console.log(info);
    return (
        <div className='col-md-8 form-order  d-flex align-items-top'>
            <div className="col-md-4 ">
                    <small>Name</small>
                    <br/>
            <small>{info.name}</small>
                </div>
                <div className="col-md-4 ">
                    <small>Email Id</small>
                    <br/>
                    <small>{info.email}</small>
                </div>
                <div className="col-md-3 ">
                    <small>Service</small>
                    <br/>
                    <small>{info.service}</small>
                </div>
                <div className="col-md-4 ">
                    <small>Project Details</small>
                    <br/>
                    <small>Lorem ipsum dolor sit amet consectetur, </small>
                </div>
                <div className="col-md-2 ">
                    <small>Status</small>
                    <br/>
                    <button className='btn btn-success'>Pendding</button>
                </div>
                </div>
    );
};

export default ShowAllService;