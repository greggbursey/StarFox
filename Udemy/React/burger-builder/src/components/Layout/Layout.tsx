import React from "react";
import Aux from "../../hoc/RAux";
import "./Layout.css";

const layout = (props: any): any => (
    <Aux>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;
