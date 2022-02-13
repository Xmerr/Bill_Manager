import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@molecules/Dialog';

export const ConfirmationDialog = props => {
    const { body, isDeleting, onCancel, onConfirm, open, title } = props;

    const actions = [
        {
            name: 'Cancel',
            onClick: onCancel,
            color: 'warning',
        },
        {
            name: isDeleting ? 'Delete' : 'Confirm',
            onClick: onConfirm,
            color: isDeleting ? 'error' : 'primary',
        },
    ];

    return <Dialog open={open} onClose={onCancel} title={title} body={body} actions={actions} />;
};

ConfirmationDialog.propTypes = {
    body: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

export default ConfirmationDialog;
