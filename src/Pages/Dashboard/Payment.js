import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data } = useQuery('booking', () => fetch(url).then(res => res.json()));

    return (
        <div>
            <h2 className='text-2xl text-purple-500'>pay for: {id}</h2>
        </div>
    );
};

export default Payment;