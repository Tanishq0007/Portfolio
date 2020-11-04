import React from 'react';

import styles from './Main.module.css';
import HeaderImg from '../Assets/images/Header.png';

const main = (props) => {
    return( 
        <div>
            <div className={styles.header}>
                <img src={HeaderImg} />
                <h3 className={styles.header_name} >Tanishq | </h3>
                <h3 className={styles.header_secondary} >Artist</h3>
            </div>
            <div className={styles.Section}>
                <div className={styles.Left_Section}>
                    <h3>Hi! I’am <span>Tanishq Verma</span>, A Designer and a Developerwith a bunch of visions.</h3>
                </div>
            </div>
        </div>
    );
};

export default main;