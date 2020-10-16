import React from 'react';
import { useForm } from "react-hook-form";
import SideBer from '../SideBer/SideBer';
import './Order.css';


const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        fetch('http://localhost:5000/orderService', {
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
                <SideBer></SideBer>
            </div>
            <div className="col-md-8 form-order ">
        
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" placeholder="Service Name" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="Description" placeholder="Project Description" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-4 form-group">
                            <input ref={register({ required: true })} className="form-control" name="price" placeholder="Price" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                    <div className="form-group text-left">
                        <button type="submit" className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Order;