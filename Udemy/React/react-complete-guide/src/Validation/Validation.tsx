import React from "react";

const validation = (props: any): any => {

    let validationMessage = "Text long enough";

    if (props.nameLength <= 5) {
        validationMessage = "Text too short";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default validation;
