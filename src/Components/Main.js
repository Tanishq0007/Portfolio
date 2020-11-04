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
                <div className={styles.Section_Bg}>
                    <div className={styles.Left_Section}>
                        <h3 className={styles.Left_Text}>Hi! I’am <span className={styles.Higlight_Black} >Tanishq Verma</span>, A Designer and a Developerwith a bunch of visions.</h3>
                        <button> Copy Link </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default main;