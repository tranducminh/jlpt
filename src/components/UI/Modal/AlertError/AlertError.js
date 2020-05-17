import React from 'react';
import styles from './AlertError.scss';

const modal = (props) => {
    return (
        <div className={styles.container}>
            <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="errorTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"><b>Thông báo</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.content}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default modal;