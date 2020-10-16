import React from 'react';

const Service = ({order}) => {
    console.log(order);
    return (
        <div className="col-md-8 form-order  d-flex align-items-top">
                <div className="col-md-2 ">
                    <small>Name</small>
                    <br/>
                <small>{order.name}</small>
                </div>
                <div className="col-md-3 bd-success">
                    <small>Email Id</small>
                    <br/>
                    <small>shakibhossain1020@gmail.com</small>
                </div>
                <div className="col-md-2 bd-success">
                    <small>Service</small>
                    <br/>
                    <small>Graphic Design</small>
                </div>
                <div className="col-md-3 bd-success">
                    <small>Project Details</small>
                    <br/>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</small>
                </div>
                <div className="col-md-2 bd-success">
                    <small>Status</small>
                    <br/>
                    <button>Pendding</button>
                </div>
            </div>
    );
};

export default Service;