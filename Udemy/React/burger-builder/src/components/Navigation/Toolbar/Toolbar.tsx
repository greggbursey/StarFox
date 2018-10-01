import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Aux from "../../../hoc/RAux";

const toolbar = (props: any): any => {
    <header>
        <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
        <div className="Logo">
            <Logo></Logo>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems></NavigationItems>
        </nav>
    </header>
};

export default toolbar;
