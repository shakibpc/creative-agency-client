import React, { useEffect, useState } from 'react';
import ClientFeedbackCard from '../ClientFeedbackCard/ClientFeedbackCard';

const ClientFeedback = () => {

    const [clientFeedback, setClientFeedback] = useState([]);
    console.log(clientFeedback);
    
    useEffect( () =>{
        fetch('http://localhost:5000/showReview')
        .then(res => res.json())
        .then(data => setClientFeedback(data));
    }, [])

    return (
        <div>
            <div>
            <section className="services-container mt-5">
            <div className="text-center">
                <h2 >Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
            </div>
            <div className="">
            <div className=" row mt-5 pt-5 p-5">
                {
                    clientFeedback.map(feedback => <ClientFeedbackCard feedback={feedback} key={feedback.name}></ClientFeedbackCard>)
                }
            </div>
        </div>
        </section>
        </div>
        </div>
    );
};

export default ClientFeedback;