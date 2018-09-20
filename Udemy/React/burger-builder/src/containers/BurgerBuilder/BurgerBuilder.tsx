import React, { Component } from "react";
import Aux from "../../hoc/RAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

interface IIngredientPrices {
    salad: number,
    cheese: number,
    meat: number,
    bacon: number
}

const INGREDIENTS_PRICES: any = {
    salad: .5,
    cheese: .4,
    meat: 1.3,
    bacon: .7
};

class BurgerBuilder extends Component {

    public state: any = {
        ingredeients: {
            salad: 1,
            cheese: 2,
            meat: 2,
            bacon: 1
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    private updatePurchaseState = (updatedIngred: any): void => {

        const sum = Object
            .keys(updatedIngred)
            .map(igKey => {
                return updatedIngred[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            purchasable: sum > 0
        });
    }

    private addIngredientHandler = (type: any): void => {
        const oldCount = this.state.ingredeients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount + 1;
            const updatedIngred = {
                ...this.state.ingredeients
            };
            updatedIngred[type] = updatedCount;
            const priceAddition = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;

            this.setState({
                totalPrice: newPrice,
                ingredeients: updatedIngred
            });

            this.updatePurchaseState(updatedIngred);
        }
    }

    private removeIngredientHandler = (type: any): void => {
        const oldCount = this.state.ingredeients[type];
        const updatedCount = oldCount - 1;
        const updatedIngred = {
            ...this.state.ingredeients
        };
        updatedIngred[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredeients: updatedIngred
        });

        this.updatePurchaseState(updatedIngred);
    }

    private purchaseHandler = (): void => {
        this.setState({
            purchasing: true
        });
    }

    private purchaseCancelHandler = (): void => {
        this.setState({
            purchasing: false
        });
    }

    private purchaseContinueHandler = (): void => {
        alert("YOU CONTINUE");
    }

    render() {

        const disabledInfo = { ...this.state.ingredeients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredeients={this.state.ingredeients}
                        purchasedCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice.toFixed(2)}
                    ></OrderSummary>
                </Modal>
                <Burger ingredeients={this.state.ingredeients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                ></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;
