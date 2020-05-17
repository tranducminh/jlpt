import React from 'react';
import styles from './Logo.scss';
import LogoDark from '../../assets/images/logo4.png';
import LogoLight from '../../assets/images/logo4.png';

const logo = (props) => (
    <div className={styles.container} >
        {props.type === "light"
            ? <img src={LogoLight} alt="logo" style={{height: props.height}}/>
            : <img src={LogoDark} alt="logo" style={{height: props.height}}/>
        }
        
    </div>
)

export default logo;