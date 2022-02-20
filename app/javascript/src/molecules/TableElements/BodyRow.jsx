import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import { Button } from '@atoms';
import { DeleteButton } from '@organisms/DeleteButton';
import { actions, columns, expandable, row } from './proptypes.js';
import styles from './tableStyles.module.scss';

const actionsRenderer =
    row =>
    ({ name, onClick, isDelete, ...rest }) => {
        if (isDelete) {
            return <DeleteButton key={name} onConfirm={() => onClick(row)} {...rest} />;
        }
        return (
            <Button key={name} onClick={() => onClick(row)} {...rest} size='small'>
                {name}
            </Button>
        );
    };

const BodyRow = ({ actions, additionalCols, columns, expandable, loading, row }) => {
    const [open, setOpen] = useState(false);

    if (loading) {
        return (
            <TableRow>
                <TableCell colSpan={columns.length + additionalCols}>
                    <Skeleton variant='rectangular' height={36} />
                </TableCell>
            </TableRow>
        );
    }

    return (
        <>
            <TableRow key={row.id} className={row.expand ? styles.noBottomBorder : ''}>
                {expandable && (
                    <TableCell>
                        {row.expand && (
                            <IconButton
                                aria-label='expand row'
                                size='small'
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        )}
                    </TableCell>
                )}
                {columns.map(column => (
                    <TableCell key={column.key}>
                        {column.render ? column.render(row) : row[column.key]}
                    </TableCell>
                ))}
                {!!(actions.length > 0) && (
                    <TableCell className={styles.actions}>
                        {actions.map(actionsRenderer(row))}
                    </TableCell>
                )}
            </TableRow>
            {expandable && row.expand && (
                <TableRow key={`${row.id} - expanded`}>
                    <TableCell colSpan={columns.length + additionalCols}>
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Box>{row.expand}</Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    );
};

BodyRow.proptypes = {
    actions,
    additionalCols: PropTypes.number.isRequired,
    columns,
    expandable,
    row,
};

export default BodyRow;
