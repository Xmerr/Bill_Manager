import React, { useState, useEffect } from 'react';
import { gql } from 'graphql-request';
import request from '../../helpers/api';

const BillCycles = () => {
    const [cycles, setCycles] = useState([]);

    useEffect(() => {
        const query = gql`
            {
                cycles {
                    date
                    debtBegin
                    debtEnd
                    id
                    savingsBegin
                    savingsEnd
                }
            }
        `;
        request(query).then(response => {
            setCycles(response.cycles);
        });
    }, []);

    return <div>{cycles?.length} bill cycles to view</div>;
};

export default BillCycles;
