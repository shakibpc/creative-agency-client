import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({s}) => {
    
    return (
        <div className="col-md-4 text-center ">
            <Link to="/order"> 
                <div className='service shadow p-3 mb-5 bg-white rounded'>
                   { s.image ? <img  style={{height: '50px'}} src={`data:image/png;base64,${s.image.img}`}/>
                    :
                    <img  style={{height: '50px'}} src={`http://localhost:5000/${s.img}`} alt="" />
                }
                    <h5 className="mt-3 mb-3 td">{s.name}</h5>
                    <p className="text-secondary">{s.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;