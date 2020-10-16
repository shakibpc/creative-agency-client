import React, { useState } from 'react';
import SideBer from '../SideBer/SideBer';
import './Review';

const Review = () => {
    const [addReview, setAddReview] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newReview = {...addReview};
        newReview[e.target.name] = e.target.value;
        setAddReview(newReview);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(addReview);
        formData.append('file', file);
        formData.append('name', addReview.name);
        formData.append('description', addReview.description);

        fetch('http://localhost:5000/review', {
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
                <SideBer></SideBer>
            </div>
         <div className="col-md-8 form-order ">
            <h4>Review</h4>
              <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your Name 0r Company's Name</label>
                                <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputEmail1" name='name' placeholder="Name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Your Review </label>
                                <input onBlur={handleBlur} type="text" class="form-control" name='description' placeholder="Description"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Upload Your Picture</label>
                                <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </main>
    );
};

export default Review;