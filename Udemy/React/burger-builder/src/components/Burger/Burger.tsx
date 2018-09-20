import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props: any) => {

    let transformedIngred: any = Object
        .keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient
                        key={igKey + i}
                        type={igKey}
                    ></BurgerIngredient>
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngred.length === 0) {
        transformedIngred = <p>Please add ingredients!</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngred}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;
