import * as React from 'react';
import PropTypes from 'prop-types';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@atoms';
import formatActions from '@helpers/formatActions';

export const Dialog = props => {
    const { actions, body, onClose, open, title } = props;
    const formattedActions = formatActions(actions);

    return (
        <MuiDialog onClose={onClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{body}</DialogContentText>
            </DialogContent>
            <DialogActions>
                {formattedActions?.map(
                    (
                        { name, onClick, isDelete, ...rest } // Deconstructing isDelete out here so it doesn't appear in "rest"
                    ) => (
                        <Button size='small' key={name} onClick={onClick} {...rest}>
                            {name}
                        </Button>
                    )
                )}
            </DialogActions>
        </MuiDialog>
    );
};

const action = PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
});

Dialog.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.arrayOf(action), action]),
    body: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
};

export default Dialog;
