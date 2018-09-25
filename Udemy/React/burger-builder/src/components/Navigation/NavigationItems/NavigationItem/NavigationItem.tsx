import React from "react";

const navigationItem = (props: any): any => {
    <li className="NavigationItem">
        <a href={props.link} className={props.active ? "active" : ""}>{props.children}</a>
    </li>
};

export default navigationItem;