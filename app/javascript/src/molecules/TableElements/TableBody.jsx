import React from 'react';
import PropTypes from 'prop-types';
import MuiBody from '@mui/material/TableBody';
import BodyRow from './BodyRow';
import { actions, columns, data, expandable } from './proptypes.js';

const loadingRowsCount = 3;

const TableBody = ({ actions, columns, data, expandable, loading }) => {
    let additionalCols = 0;
    if (expandable) {
        additionalCols++;
    }
    if (actions.length > 0) {
        additionalCols++;
    }

    if (loading) {
        const loadingRows = [];
        let i = 0;

        while (i < loadingRowsCount) {
            loadingRows.push(
                <BodyRow columns={columns} key={i} loading additionalCols={additionalCols} />
            );
            i++;
        }

        return <MuiBody>{loadingRows}</MuiBody>;
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
    loading: PropTypes.bool,
};

export default TableBody;
