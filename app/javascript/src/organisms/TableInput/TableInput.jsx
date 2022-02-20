import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@organisms/Table';

export const TableInput = ({ columns, data, edit, loading }) => {
    return (
        <>
            <Table columns={columns} data={data} loading={loading} />
        </>
    );
};

TableInput.proptypes = {
    edit: PropTypes.bool,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
