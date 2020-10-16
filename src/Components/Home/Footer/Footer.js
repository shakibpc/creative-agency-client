import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <main className="row d-flex align-items-top footer-bg mt-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h2 style={{ color: '#111430' }}>Let us handle your <br />project, professionally.</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
            </div>
            <div className="col-md-6 mt-5">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="d-flex justify-content-center w-100">
               <div>
               <h6>copyright Orange labs 2020</h6>
                   </div> 
            </div>
        </main>
        
    );

};

export default Footer;