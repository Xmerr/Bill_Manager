import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router';

const BillCycleDetails = props => {
    const [bill, setBill] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const { id } = params;
        const url = `/api/v1/show/${id}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('oops');
            })
            .then(response => setBill(response));
    }, []);

    const deleteCycle = () => {
        const { id } = params;
        const url = `/api/v1/destroy/${id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: 'delete',
            headers: {
                'X-CSRF-Token': token,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('oops');
            })
            .then(response => {
                if (response.ok) {
                    return;
                }
                throw new Error('oops');
            })
            .then(() => {
                navigate('/bill-cycles');
            });
    };

    return (
        <>
            <div>I'm just a bill</div>
            <Button variant='contained' onClick={deleteCycle}>
                Delete
            </Button>
        </>
    );
};

export default BillCycleDetails;
