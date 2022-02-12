import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
import { alignments, textVariants } from '../../helpers/enums';

export const Typography = props => <MuiTypography {...props} />;

Typography.propTypes = {
    align: PropTypes.oneOf(alignments),
    children: PropTypes.string.isRequired,
    paragraph: PropTypes.bool,
    variant: PropTypes.oneOf(textVariants),
};
