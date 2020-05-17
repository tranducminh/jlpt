import React, { Component } from 'react';
import styles from './ProcessBar.scss';

export default class ProcessBar extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    displayPart = (part) => {
        this.props.displayPart(part)
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.item} onClick={() => this.displayPart(1)}>文字 。漢字 。 文法</div>
                    <div className={styles.item} onClick={() => this.displayPart(2)}>読解</div>
                    <div className={styles.item} onClick={() => this.displayPart(3)}>聴解</div>
                </div>
            </div>
        )
    }
}

