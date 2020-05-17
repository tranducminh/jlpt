import React from 'react';
import styles from './Search.scss';
import Select from '../UI/Input/Select/Select';

const SearchForm = props => {
    let levelList = {
        placeholder: 'Cấp độ',
        listOption: [
            { content: 'N1', value: '1' },
            { content: 'N2', value: '2' },
            { content: 'N3', value: '3' },
            { content: 'N4', value: '4' },
            { content: 'N5', value: '5' }
        ]
    }
    let examList = {
        placeholder: 'Đề thi',
        listOption: [
            { content: 'Đề thi JLPT các năm', value: '1' },
            { content: 'Đề thi chuẩn JLPT', value: '2' },
            { content: 'Đề thi JLPT mới', value: '3' },
            { content: 'Đề thi luyện kỹ năng', value: '4' }
        ]
    }
    return (
        <div className={styles.container}>
            <Select {...levelList} />
            <Select {...examList} />
            <div className={styles.search}>
                <div className="button-search">
                    Tìm kiếm
                </div>
            </div>
        </div>
    )
}

export default SearchForm;