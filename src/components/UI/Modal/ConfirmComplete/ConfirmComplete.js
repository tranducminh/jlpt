import React from 'react';
import styles from './ConfirmComplete.scss';
import $ from 'jquery';

const modal = (props) => {
    function onComplete(){
        props.onComplete();
        $('#completeModal').modal('hide')
    }
    return (
        <div className={styles.container}>
            <div className="modal fade" id="completeModal" tabIndex="-1" role="dialog" aria-labelledby="completeTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"><b>Hoàn thành</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc muốn nộp bài không?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Tiếp tục làm bài thi</button>
                            <button type="button" className="btn btn-primary" onClick={() => onComplete()}>Nộp bài</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default modal;