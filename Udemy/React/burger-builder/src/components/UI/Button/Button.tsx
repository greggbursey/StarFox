import React from "react";

const button = (props: any): any => {

    <button
        onClick={props.clicked}
        className={["Button", props.type].join(" ")}>
        {props.children}
    </button>

}

export default button;
