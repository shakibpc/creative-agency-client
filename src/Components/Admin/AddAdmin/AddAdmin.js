import React from 'react';
import { useForm } from "react-hook-form";
import AdminSideber from '../../AdminSideber/AdminSideber';
import './AddAdmin.css';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            console.log(success);
        })
    }
    return (
        <main className="row d-flex align-items-top">
            <div className="col-md-2 offset-md-1">
                <AdminSideber></AdminSideber>
            </div>
            <div className="col-md-8 form-order ">
            <h1>Order</h1>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-left">
                        <button type="submit" id='SUBMIT' className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddAdmin;