import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/RAux";

const sideDrawer = (props: any) => {

    let attachClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachClasses = ["SideDrawer", "Open"];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachClasses.join(" ")}>
                <div className="Logo">
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;
