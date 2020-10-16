import React from 'react';
import avader from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#111430'}}>Let's Grow Your <br/> Brand To The <br/>Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
               <button className="btn btn-primary">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={avader} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;