import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {

    const [ourService, setOurService] = useState([]);
    console.log(ourService);
    
    useEffect( () =>{
        fetch('http://localhost:5000/showAddService')
        .then(res => res.json())
        .then(data => setOurService(data));
    }, [])
    
    return (
        <div>
            <section className="services-container mt-5">
            <div className="text-center ">
                <h2 >Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            </div>
            <div className="">
            <div className=" row mt-5 pt-5 p-5 ">
                {
                    ourService.map(s => <ServiceDetail s={s} key={s.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
        </div>
    );
};

export default Services;