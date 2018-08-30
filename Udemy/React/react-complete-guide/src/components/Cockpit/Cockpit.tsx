import React from "react";

const cockpit = (props: any): any => {

    //let classes = ["red", "bold"].join(" ");// "red bold"
    const classes: string[] = [];
    if (props.persons.length <= 2) {
        classes.push("red");
    }
    if (props.persons.length <= 1) {
        classes.push("bold");
    }

    return (
        <div>
            <h1>Hi, I'm a ReactApp.</h1>
            <p className={classes.join(" ")}>This is really nice</p>

            <button onClick={props.togglePersonsHandler}>Toggle People</button>
        </div>
    );
};

export default cockpit;
