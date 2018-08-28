import React, { ReactNode } from "react";
import UserInput from "./userinput";
import UserOutput from "./useroutput";

export default class App extends React.Component {

    public state: { userName: string } = {
        userName: "Original User Name"
    };

    private userNameChangeHandler = (event: any): void => {
        this.setState(
            {
                userName: event.target.value
            }
        );
    }

    render(): any {
        return (
            <div>
                <UserInput name={this.state.userName} changeMei={this.userNameChangeHandler.bind(this)}></UserInput>
                <UserOutput name={this.state.userName}></UserOutput>
                <UserOutput name={this.state.userName}></UserOutput>
                <UserOutput name={this.state.userName}></UserOutput>
            </div>
        );
    }
}