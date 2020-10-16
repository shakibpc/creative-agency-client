import React from 'react';
import { useState } from 'react';
import AdminSideber from '../../AdminSideber/AdminSideber';
import './AddService.css';

const AddService = () => {
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(addService);
        formData.append('file', file);
        formData.append('name', addService.name);
        formData.append('description', addService.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <main className="row d-flex align-items-top">
            <div className="col-md-2 offset-md-1">
                <AdminSideber></AdminSideber>
            </div>
            <div className="col-md-8 form-order ">
                <h5>Add Service</h5>
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Service Title</label>
                                <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputEmail1" name='name' placeholder="Title"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Service Description</label>
                                <input onBlur={handleBlur} type="text" class="form-control" name='description' placeholder="Description"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Upload Icon</label>
                                <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
        </main>
    );
};

export default AddService;