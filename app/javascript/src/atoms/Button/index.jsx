import React from 'react';
import PropTypes from 'prop-types';
import { default as MuiButton } from '@mui/material/Button';
import { buttonVariants, colors, sizes } from '@helpers/enums';

export const Button = props => <MuiButton color='primary' variant='contained' {...props} />;

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(sizes),
    variant: PropTypes.oneOf(buttonVariants),
};
