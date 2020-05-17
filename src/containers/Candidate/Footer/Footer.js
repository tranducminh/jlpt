import React from 'react';
import styles from './Footer.scss';
import Logo from '../../../components/Logo/Logo';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <Logo height="4em" type="light" />
                        {/* <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <i className={`far fa-address-card ${styles.icon}`}></i>
                                <span>Collin Street West, Victor 8007, Australia.</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className={`fas fa-phone ${styles.icon}`}></i>
                                <span>+1 246-345-0695</span>
                            </div>
                            <div className={styles.infoItem}>
                                <i className={`far fa-envelope ${styles.icon}`}></i>
                                <span>+1 246-345-0695</span>
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.contentRight}>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
