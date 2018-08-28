import React from "react";
import "./Person.css";
import Validate from "../Validation/validation";

const person = (props: any): any => {

    return (
        <div className="Person">
            <p onClick={props.clickThingy}>I'm {props.name}. And I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changeMei} />
            <Validate nameLength={props.name.length}></Validate>
        </div>
    );
}

export default person;
