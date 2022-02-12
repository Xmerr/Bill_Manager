import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { columns, expandable, row } from './proptypes.js';
import styles from './tableStyles.module.scss';

const BodyRow = ({ columns, row, expandable }) => {
    const [open, setOpen] = useState(false);

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
            </TableRow>
            {expandable && row.expand && (
                <TableRow key={`${row.id} - expanded`}>
                    <TableCell colSpan={columns.length + 1}>
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
    columns,
    expandable,
    row,
};

export default BodyRow;
