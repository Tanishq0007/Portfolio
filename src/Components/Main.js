import React from 'react';

import styles from './Main.module.css';
import HeaderImg from '../Assets/images/Header.png';
import project1 from '../Assets/images/projects/IPATC.png';

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
                        <div className={styles.BtnBg}>
                            <button className={ styles.Btn }> COPY LINK </button>
                        </div>
                    </div>
                    <div className={styles.Hustle}>
                        <span>H</span>
                        <span>U</span>
                        <span>S</span>
                        <span>T</span>
                        <span>L</span>
                        <span>E</span>
                    </div>
                    <div className={styles.Right_Section}>
                        DESIGN IS UNDERS- TANDING <span className={styles.Better}>BETTER</span>
                    </div>
                </div>
            </div>
            {/* Projects */}
            <div className={styles.Projects}>
                <div className={styles.Heading_Text}>
                    <h1 className={styles.Heading}>PROJECTS</h1>
                </div>
                <div className={styles.carousel_wrap}>
                        <div className={styles.owl_carousel}>
                            <div className={styles.itam}>
                                <img src={project1}/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default main;