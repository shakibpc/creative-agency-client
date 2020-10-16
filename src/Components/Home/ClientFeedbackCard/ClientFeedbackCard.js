import React from 'react';

const ClientFeedbackCard = ({feedback}) => {
    return (
        <div className="col-md-4 mb-5 mt-5 text-center align-content-center">
            <div className='border p-2'>
                {    feedback.image ? <img  style={{height: '50px'}} src={`data:image/png;base64,${feedback.image.img}`}/>
                    :
                    <img  style={{height: '50px'}} src={`http://localhost:5000/${feedback.img}`} alt="" />
                 }
            <h5 className="mt-3 mb-3">{feedback.name}</h5>
            <p className="text-secondary">{feedback.description}</p>
            </div>
        </div>
    );
};

export default ClientFeedbackCard;