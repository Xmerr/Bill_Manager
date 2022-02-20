import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { gql } from 'graphql-request';
import { deleteCycle } from '@helpers/requests';
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
    const navigate = useNavigate();

    const fetchData = async () => {
        const query = gql`
            {
                cycles {
                    id
                    date
                    debtEnd
                    savingsEnd
                    lineItems {
                        id
                        name
                        amount
                    }
                }
            }
        `;

        const response = await request(query);

        setCycles(response.cycles.map(formatCycle));
        setLoading(false);
    };

    const deleteRecord = async ({ id }) => {
        setLoading(true);
        await deleteCycle(id);
        fetchData();
    };

    useEffect(fetchData, []);

    const actions = [
        {
            name: 'Details',
            onClick: ({ id }) => navigate(`/bill-cycles/${id}`),
        },
        {
            isDelete: true,
            onClick: deleteRecord,
        },
    ];

    return (
        <Tableview
            actions={actions}
            columns={cycleColums}
            data={cycles}
            loading={loading}
            subtitle='Here you can view all the billing cycles already completed'
            title='Bill Cycles'
        />
    );
};

export default BillCycles;
