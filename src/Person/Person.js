import React from 'react';

const person = (props) => {
    return (
        <div>
        <p>Im {props.age} yeards old </p>
        {/* children is a reserved keyword */}
        <p>{props.children}</p>
        </div>
    )
};

export default person;