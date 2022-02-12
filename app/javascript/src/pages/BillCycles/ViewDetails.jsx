import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { gql } from 'graphql-request';
import request from '../../helpers/api';

const BillCycleDetails = props => {
    const [cycle, setCycle] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const { id } = params;
        const query = gql`
            {
                 cycle(id: ${id}) {
                    date
                    debtBegin
                    debtEnd
                    id
                    savingsBegin
                    savingsEnd
                }
            }
        `;

        request(query)
            .then(response => {
                setCycle(response.cycle);
            })
            .catch(() => {
                navigate('/bill-cycles');
            });
    }, []);

    const deleteCycle = () => {
        const { id } = params;
        const query = gql`
            mutation d {
                deleteBillingCycle(input: { id: ${id} }) {
                    billCycle {
                        id
                    }
                }
            }
        `;

        request(query).then(() => {
            navigate('/bill-cycles');
        });
    };

    return (
        <>
            <div>I'm just a bill</div>
            <div>{JSON.stringify(cycle)}</div>
            <Button variant='contained' onClick={deleteCycle}>
                Delete
            </Button>
        </>
    );
};

export default BillCycleDetails;
