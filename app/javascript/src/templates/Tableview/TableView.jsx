import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@atoms';
import { Table } from '@organisms';
import { actions } from '@molecules/TableElements/proptypes';
import styles from './Tableview.module.scss';

export const Tableview = ({ actions, columns, data, loading, subtitle, title }) => {
    return (
        <>
            <div className={styles.title}>
                <Typography variant={subtitle ? 'h5' : 'h6'}>{title}</Typography>
                {subtitle && <Typography variant='subtitle1'>{subtitle}</Typography>}
            </div>
            <div className={styles.table}>
                <Table actions={actions} columns={columns} data={data} loading={loading} />
            </div>
        </>
    );
};

Tableview.proptypes = {
    actions,
    loading: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
};
