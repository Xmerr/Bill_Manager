import React from 'react';
import MuiBody from '@mui/material/TableBody';
import BodyRow from './BodyRow';
import { columns, data, expandable } from './proptypes.js';

const TableBody = ({ columns, data, expandable }) => {
    return (
        <MuiBody>
            {data.map(row => (
                <BodyRow columns={columns} expandable={expandable} key={row.id} row={row} />
            ))}
        </MuiBody>
    );
};

TableBody.proptypes = {
    columns,
    data,
    expandable,
};

export default TableBody;
