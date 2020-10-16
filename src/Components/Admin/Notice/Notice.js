import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideber from '../../AdminSideber/AdminSideber';

const Notice = () => {
    return (
        <main className="row d-flex align-items-top">
            <div className="col-md-2 offset-md-1">
                <AdminSideber></AdminSideber>
            </div>
            <div className='col-md-4 form-order p-5'>
            <h1>This Page Only For Admin</h1>
           <Link to='/'><button className='btn btn-danger'></button> Back To Home</Link> 
            </div>
        </main>
    );
};

export default Notice;