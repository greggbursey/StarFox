import React from "react";
import "./userinput.css";

const userInput = (props: any): JSX.Element => {
    return (
        <div className="UserInput">
            <input type="text"
                onChange={props.changeMei}
                value={props.name} />
        </div>
    )
};

export default userInput;
