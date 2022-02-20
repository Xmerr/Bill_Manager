import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@atoms';
import { CycleRegion } from '@organisms';
import styles from './Details.module.scss';

export const CycleDetails = ({ date, subtitle }) => (
    <>
        <Typography align='center' variant='h5'>
            Date: {date}
        </Typography>
        <Typography align='center' variant='subtitle1'>
            {subtitle}
        </Typography>
        <div className={styles.regions}>
            <CycleRegion title='Income' />
            <CycleRegion title='Expenses' />
        </div>
    </>
);

CycleDetails.proptypes = {
    edit: PropTypes.bool,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
