import React, { Component } from "react";
import Aux from "../../hoc/RAux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingredeients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredeients={this.state.ingredeients}></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
