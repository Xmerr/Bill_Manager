import React from 'react';
import MuiBody from '@mui/material/TableBody';
import BodyRow from './BodyRow';
import { actions, columns, data, expandable } from './proptypes.js';

const TableBody = ({ actions, columns, data, expandable }) => {
    let additionalCols = 0;
    if (expandable) {
        additionalCols++;
    }
    if (actions.length > 0) {
        additionalCols++;
    }

    return (
        <MuiBody>
            {data.map(row => (
                <BodyRow
                    actions={actions}
                    additionalCols={additionalCols}
                    columns={columns}
                    expandable={expandable}
                    key={row.id}
                    row={row}
                />
            ))}
        </MuiBody>
    );
};

TableBody.proptypes = {
    actions,
    columns,
    data,
    expandable,
};

export default TableBody;
