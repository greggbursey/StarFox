import React, { Component } from "react";
import Aux from "../../hoc/RAux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    public state = {
        showSideDrawer: false
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }

    private sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    private sideDrawerToggleHandler = () => {
        this.setState((prevState: any) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
}

export default Layout;
