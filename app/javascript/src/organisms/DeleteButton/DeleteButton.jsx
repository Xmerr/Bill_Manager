import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Button } from '@atoms';
import { DeleteDialog } from '@molecules';

export const DeleteButton = props => {
    const { onConfirm, buttonProps } = props;
    const [open, setOpen] = useState(false);

    const onCancel = () => setOpen(false);
    const confirmed = () => {
        onConfirm();
        setOpen(false);
    };

    return (
        <>
            <Button color='error' onClick={() => setOpen(true)} {...buttonProps}>
                <DeleteForeverRoundedIcon />
            </Button>
            <DeleteDialog onCancel={onCancel} onConfirm={confirmed} open={open} />
        </>
    );
};

DeleteDialog.propTypes = {
    onConfirm: PropTypes.func.isRequired,
};

export default DeleteDialog;
