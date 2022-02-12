import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BillCycleCreate = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const url = '/api/v1/bills/create';
        const body = {
            date: new Date().toLocaleDateString(),
            debt: 123,
            savings: 1234,
        };
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: 'post',
            headers: {
                'X-CSRF-Token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('oops');
            })
            .then(response => {
                navigate(`/bill-cycles/${response.id}`);
            });
    }, []);

    return <div>New Bill being created</div>;
};

export default BillCycleCreate;
