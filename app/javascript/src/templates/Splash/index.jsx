import React from 'react';
import PropTypes from 'prop-types';
import styles from './Splash.module.scss';
import { Typography } from '@atoms';
import { Navbar } from '@molecules';

export const Splash = ({ title, subtitle }) => (
    <div className={styles.outer}>
        <div className={styles.inner}>
            <Typography variant='h2'>{title}</Typography>
            <Typography variant='subtitle1'>{subtitle}</Typography>
            <hr />
            <Navbar />
        </div>
    </div>
);

Splash.proptypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
