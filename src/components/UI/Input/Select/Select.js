import React from 'react';
import styles from './Select.scss';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.placeholder
        }
    }
    onClick = (value, content) => {
        this.setState({
            content: content
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.content}>
                    <div data-toggle="dropdown">
                        <i className={`fas fa-chevron-down ${styles.icon}`} ></i>
                        <div className={styles.text}>{this.state.content}</div>
                    </div>
                    <div className={`dropdown-menu ${styles.select}`}>
                        {this.props.listOption.map((item, index) => (
                            <div key={index} className={styles.item} onClick={() => this.onClick(item.value, item.content)}>{item.content}</div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Select;