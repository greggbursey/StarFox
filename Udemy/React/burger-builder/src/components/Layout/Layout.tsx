import React from "react";
import Aux from "../../hoc/RAux";

const layout = (props: any): any => (
    <Aux>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;
