import React, { CSSProperties } from "react";

const char = (props: any): any => {

    const style: CSSProperties = {
        display: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "3px solid gray",
        textAlign: "center"
    };

    return (
        <div style={style}
            onClick={props.character}>
            {props.character}
        </div>
    );
}

export default char;
