import React from "react";
import Aux from "../../../hoc/RAux";
import Button from "../../UI/Button/Button";

const orderSummary = (props: any): any => {

    const ingredSumm = Object
        .keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {props.ingredients[igKey]}
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
            <p><b>Total Price: {props.price}</b></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;
