import React, { Component } from "react";
import PropTypes from "prop-types";

interface IBurgerIngredient {
    type: string;
}

class BurgerIngredient extends Component {

    public props: IBurgerIngredient = {
        type: ""
    };
    public static propTypes: any;

    render(): JSX.Element | null {
        let ingredient = null;

        switch (this.props.type) {
            case "bread-bottom":
                ingredient = <div className="BreadBottom"></div>;
                break;
            case "bread-top":
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                )
                break;
            case "meat":
                ingredient = <div className="Meat"></div>;
                break;
            case "cheese":
                ingredient = <div className="Cheese"></div>;
                break;
            case "bacon":
                ingredient = <div className="Bacon"></div>;
                break;
            case "salad":
                ingredient = <div className="Salad"></div>;
                break;
            default:
                break;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
