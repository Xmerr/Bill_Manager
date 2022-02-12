import React from 'react';
import styles from './Splash.module.scss';
import { Navbar } from '../../molecules';

export default ({ title, subtitle }) => (
    <div className={styles.outer}>
        <div className={styles.inner}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <hr />
            <Navbar />
        </div>
    </div>
);
