import React, { CSSProperties, Component } from "react";
import Aux from "../../../hoc/RAux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps: any, nextState: any): any {
        if (nextProps.show !== this.props.show) {
            return true;
        }
    }

    componentWillUpdate() {
        console.log("Modal will update");
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}>

                    <div className="Modal" style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? 1 : 0,
                    }}>
                        {this.props.children}
                    </div>

                </Backdrop>
            </Aux>
        )
    }
}

export default Modal;
