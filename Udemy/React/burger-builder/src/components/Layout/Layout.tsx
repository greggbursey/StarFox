import React from "react";
import Aux from "../../hoc/RAux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props: any): any => (
    <Aux>
        <Toolbar></Toolbar>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;
