import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@atoms';
import { Table } from '@molecules';
import styles from './Tableview.module.scss';

export const Tableview = ({ title, subtitle, columns, data }) => (
    <>
        <div className={styles.title}>
            <Typography variant={subtitle ? 'h5' : 'h6'}>{title}</Typography>
            {subtitle && <Typography variant='subtitle1'>{subtitle}</Typography>}
        </div>
        <div className={styles.table}>
            <Table columns={columns} data={data} />
        </div>
    </>
);

Tableview.proptypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};
