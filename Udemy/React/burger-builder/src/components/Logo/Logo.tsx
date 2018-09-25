import React from "react";
const burgerLogo = require("../../assets/images/burger-logo.png");

const logo = (props: any): any => {
    <div className="Logo">
        <img src={burgerLogo} alt="MyBurger" />
    </div>
};

export default logo;
