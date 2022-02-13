import React from 'react';
import PropTypes from 'prop-types';
import { ConfirmationDialog } from '@molecules/ConfirmationDialog';

export const DeleteDialog = props => {
    const { onCancel, onConfirm, open } = props;

    const title = 'Are you sure?';
    const body = 'This data can not be recovered, are you sure you want to delete this record?';

    return (
        <ConfirmationDialog
            body={body}
            isDeleting
            onCancel={onCancel}
            onConfirm={onConfirm}
            open={open}
            title={title}
        />
    );
};

DeleteDialog.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default DeleteDialog;
