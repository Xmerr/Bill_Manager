import React from 'react';
import PropTypes from 'prop-types';
import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TableBody, TableHeader, proptypes } from '../../atoms/TableElements';

/**
 * Formats all the columns into a consistent shape. Doing this as soon as the component loads is easier than constantly type checking
 * @param {array} columns - Columns to be formatted
 */
const formatColumns = columns => {
    const formattedList = columns.map(column => {
        return {
            name: column?.name || column,
            key: column?.key || column?.name || column,
        };
    });

    return formattedList;
};

const isExpandable = data => data.some(({ expand }) => !!expand);

export const Table = props => {
    const { columns, data } = props;

    const formattedColumns = formatColumns(columns);
    const expandable = isExpandable(data);

    return (
        <TableContainer>
            <MuiTable>
                <TableHeader columns={formattedColumns} expandable={expandable} />
                <TableBody columns={formattedColumns} data={data} expandable={expandable} />
            </MuiTable>
        </TableContainer>
    );
};

// Proptypes are intentionally duplicated here because of a weird bug with storybooks
Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                key: PropTypes.string,
            }),
        ])
    ).isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            expandable: PropTypes.node,
        })
    ).isRequired,
};
