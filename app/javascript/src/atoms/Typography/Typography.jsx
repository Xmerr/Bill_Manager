import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { alignments, textVariants } from '../../helpers/enums';

export const Typography = props => {
    if (props.loading) {
        let height = 32;
        let width = '10%';

        switch (props.variant) {
            case 'h5':
            case 'h6':
                height = 32;
                width = '10%';
                break;

            case 'subtitle1':
                height = 28;
                width = '40%';
        }

        return <Skeleton variant='text' width={width} height={height} />;
    }

    return <MuiTypography {...props} />;
};

Typography.propTypes = {
    align: PropTypes.oneOf(alignments),
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    paragraph: PropTypes.bool,
    variant: PropTypes.oneOf(textVariants),
};
