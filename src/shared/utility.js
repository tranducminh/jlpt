import React from 'react';
import parse from 'html-react-parser'

export const updateObject = (oldObject, updatedProperties) => ({
    ...oldObject,
    ...updatedProperties,
});

export const convertToHtml = (source) => (
    <React.Fragment>
        {parse(source)}
    </React.Fragment>
)

export const convertTime = (year, month, date, hour, minute, second) => {
    return customizeTime(year) + customizeTime(month) + customizeTime(date) + customizeTime(hour) + customizeTime(minute) + customizeTime(second);
}

function customizeTime(time) {
    if (time < 10) {
        return '0' + time.toString();
    }
    else {
        return time.toString();
    }
}