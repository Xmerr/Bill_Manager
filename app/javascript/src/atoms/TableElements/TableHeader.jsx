import React from 'react';
import MuiHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { columns, expandable } from './proptypes.js';
import styles from './tableStyles.module.scss';

const TableHeader = ({ columns, expandable }) => {
    const presenceSum = columns.reduce((sum, column) => {
        if (!isNaN(column.presence)) {
            return sum + column.presence;
        }
        return sum;
    }, 0);

    return (
        <MuiHead>
            <TableRow>
                {expandable && <TableCell className={styles.expandWidth} />}
                {columns.map(column => (
                    <TableCell key={column.key} sx={{ width: column.presence / presenceSum }}>
                        {column.name}
                    </TableCell>
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
