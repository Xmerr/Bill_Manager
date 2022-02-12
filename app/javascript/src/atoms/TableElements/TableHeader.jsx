import React from 'react';
import MuiHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { columns, expandable } from './proptypes.js';

const TableHeader = ({ columns, expandable }) => {
    return (
        <MuiHead>
            <TableRow>
                {expandable && <TableCell />}
                {columns.map(column => (
                    <TableCell key={column.key}>{column.name}</TableCell>
                ))}
            </TableRow>
        </MuiHead>
    );
};

TableHeader.proptypes = {
    columns,
    expandable,
};

export default TableHeader;
