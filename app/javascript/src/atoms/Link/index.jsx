import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '../Button';

export const Link = props => <Button component={RouterLink} {...props} />;

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
