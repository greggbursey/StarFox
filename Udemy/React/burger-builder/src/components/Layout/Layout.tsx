import React from "react";
//import Aux from "../../hoc/Aux";

const layout = (props: any): any => (
    <div>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </div>
);

export default layout;
