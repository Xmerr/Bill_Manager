import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@atoms';

export const CycleRegion = ({ edit, rows, title }) => (
    <div>
        <Typography align='center' variant='h5'>
            {title}
        </Typography>
    </div>
);

CycleRegion.proptypes = {
    edit: PropTypes.bool,
    rows: PropTypes.any,
    title: PropTypes.string.isRequired,
};
