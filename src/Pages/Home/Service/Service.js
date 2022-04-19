import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css";
const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="col">
            <div className="card text-center h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price : {price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div>
                    <button onClick={()=>navigateServiceDetail(id)} className="booking-btn w-100">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;