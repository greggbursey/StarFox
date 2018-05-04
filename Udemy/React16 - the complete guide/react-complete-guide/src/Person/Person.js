import React from 'react';

// These do NOT modify the application state - they should just render something
const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name}, I am {props.age}!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;