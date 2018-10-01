import React, { Component } from "react";
import Aux from "../../../hoc/RAux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log("OrderSummary will update");
    }

    render() {

        const ingredSumm = Object
            .keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your delicious burger contains these ingredients:</p>
                <ul>
                    {ingredSumm}
                </ul>
                <p><b>Total Price: {this.props.price}</b></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;
