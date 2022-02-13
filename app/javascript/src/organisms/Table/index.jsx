import React from 'react';
import PropTypes from 'prop-types';
import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TableBody, TableHeader } from '@molecules/TableElements';
import { colors, buttonVariants } from '@helpers/enums';
import formatActions from '@helpers/formatActions';

/**
 * Formats all the columns into a consistent shape. Doing this as soon as the component loads is easier than constantly type checking
 * @param {array} columns - Columns to be formatted
 */
const formatColumns = columns => {
    const formattedList = columns.map(column => {
        return {
            ...column,
            name: column?.name || column.toTitleCase(),
            key: column?.key || column?.name || column,
            presence: column.presence || 1,
        };
    });

    return formattedList;
};

const isExpandable = data => data.some(({ expand }) => !!expand);

export const Table = props => {
    const { actions, columns, data } = props;

    const formattedColumns = formatColumns(columns);
    const formattedActions = formatActions(actions);
    const expandable = isExpandable(data);

    return (
        <TableContainer>
            <MuiTable size='small'>
                <TableHeader
                    actions={formattedActions}
                    columns={formattedColumns}
                    expandable={expandable}
                />
                <TableBody
                    actions={formattedActions}
                    columns={formattedColumns}
                    data={data}
                    expandable={expandable}
                />
            </MuiTable>
        </TableContainer>
    );
};

// Proptypes are intentionally duplicated here because of a weird bug with storybooks
const action = PropTypes.shape({
    color: PropTypes.oneOf(colors),
    isDelete: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(buttonVariants),
});

Table.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.arrayOf(action), action]),
    columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                key: PropTypes.string,
                name: PropTypes.string.isRequired,
                presence: PropTypes.number,
            }),
        ])
    ).isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            expandable: PropTypes.node,
        })
    ).isRequired,
    delete: PropTypes.func,
};
