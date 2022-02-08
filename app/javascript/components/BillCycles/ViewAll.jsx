import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const BillCycles = () => {
    const [bills, setBills] = useState([]);
    const params = useParams();

    useEffect(() => {
        const { id } = params;
        const url = `/api/v1/bills/index`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('oops');
            })
            .then(response => setBills(response));
    }, []);

    return <div>{bills?.length} bill cycles to view</div>;
};

export default BillCycles;
