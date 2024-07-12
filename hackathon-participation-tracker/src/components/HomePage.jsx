import React from 'react';

import styles from "../assets/styles/HomePage.module.css";

const HomePage = () => {
    return (
        <div>
            <h1 className={styles.h1}>Welcome to the Home Page!</h1>
            <h2 className={styles.h2}>
                <a href='/generate' target="_blank" rel="noopener noreferrer" className={styles.anchor}>Ready to start tracking?</a>
            </h2>
        </div>
    );
};

export default HomePage;