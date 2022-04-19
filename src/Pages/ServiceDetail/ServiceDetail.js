import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Servide details: {serviceId}</h2>
            <Link className='btn btn-link' to='/checkout'>Checkout</Link>
        </div>
    );
};

export default ServiceDetail;