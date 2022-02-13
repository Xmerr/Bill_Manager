import React from 'react';
import MuiHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { actions, columns, expandable } from './proptypes.js';
import styles from './tableStyles.module.scss';

const TableHeader = ({ actions, columns, expandable }) => {
    const presenceSum = columns.reduce((sum, column) => {
        if (!isNaN(column.presence)) {
            return sum + column.presence;
        }
        return sum;
    }, actions.length / 3);

    return (
        <MuiHead>
            <TableRow>
                {expandable && <TableCell className={styles.expandWidth} />}
                {columns.map(column => (
                    <TableCell key={column.key} sx={{ width: column.presence / presenceSum }}>
                        {column.name}
                    </TableCell>
                ))}
                {actions.length > 0 && (
                    <TableCell sx={{ width: actions.length / 3 / presenceSum }} />
                )}
            </TableRow>
        </MuiHead>
    );
};

TableHeader.proptypes = {
    actions,
    columns,
    expandable,
};

export default TableHeader;
