import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './Home.module.scss';

export default () => (
    <div className={styles.outer}>
        <div className={styles.inner}>
            <h1>Bill Manager</h1>
            <p>A tool created to help me keep up with my bills</p>
            <hr />
            <Button component={Link} to='bill-cycles' variant='contained'>
                View Bill Cycles
            </Button>
        </div>
    </div>
);
