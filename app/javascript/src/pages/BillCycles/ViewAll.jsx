import React, { useState, useEffect } from 'react';
import { gql } from 'graphql-request';
import request from '@helpers/api';
import { Tableview } from '@templates';

const cycleColums = [
    'date',
    {
        name: 'Remaining Debt',
        render: ({ debtEnd }) => debtEnd.toDollars(),
    },
    {
        name: 'Savings',
        render: ({ savingsEnd }) => savingsEnd.toDollars(),
    },
];

const lineColumns = [
    'name',
    {
        name: 'amount',
        render: ({ amount }) => amount.toDollars(),
    },
];

const formatCycle = ({ lineItems, ...rest }) => {
    return {
        ...rest,
        expand: <Tableview title='Line Items' columns={lineColumns} data={lineItems} />,
    };
};

const BillCycles = () => {
    const [cycles, setCycles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = gql`
            {
                cycles {
                    id
                    date
                    debtEnd
                    savingsEnd
                    lineItems {
                        name
                        amount
                    }
                }
            }
        `;
        request(query).then(response => {
            setCycles(response.cycles.map(formatCycle));
            setLoading(false);
        });
    }, []);

    return (
        <Tableview
            columns={cycleColums}
            subtitle='Here you can view all the billing cycles already completed'
            title='Bill Cycles'
            data={cycles}
        />
    );
};

export default BillCycles;
