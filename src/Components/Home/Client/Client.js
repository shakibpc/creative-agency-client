import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnd from '../../../images/logos/airbnb.png';
import './Client.css';

const Client = () => {
    return (
        <div className="row d-flex justify-content-center p-5">
            <div className="col-md-2">
                <img src={slack} alt="" className="img-fluid brand"/>
            </div>
            <div className="col-md-2">
                <img src={google} alt="" className="img-fluid brand"/>
            </div>
            <div className="col-md-2">
                <img src={uber} alt="" className="img-fluid brand"/>
            </div>
            <div className="col-md-2">
                <img src={netflix} alt="" className="img-fluid brand"/>
            </div>
            <div className="col-md-2">
                <img src={airbnd} alt="" className="img-fluid brand"/>
            </div>
        </div>
    );
};

export default Client;