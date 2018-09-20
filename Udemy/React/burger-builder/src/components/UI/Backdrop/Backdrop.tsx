import React from "react";

const backdrop = (props: any): any => {

    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;

};

export default backdrop;
