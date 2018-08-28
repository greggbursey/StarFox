import React from "react";
import "./useroutput.css";

const userOutput = (props: any): JSX.Element => {

    const pirateHeader = {
        backgroundColor: "orange",
        fontSize: "40px"
    };

    return (
        <div className="UserOutput">
            <h3 style={pirateHeader}> What is a Pirate's least favorite letter? It's certainly not Rrrrr!</h3>
            <h4>But his favorite name is: {props.name}</h4>
            <p>
                Overhaul mutiny fire ship lee snow bilge rat lugsail gunwalls bounty tender. Hearties prow crimp bucko barkadeer Cat o'nine tails coffer scurvy league booty. Parley black spot cog hornswaggle hulk holystone hogshead capstan man-of-war interloper.
            </p>
            <p>
                Snow hogshead barque gun Jolly Roger scuppers sheet prow heave down Letter of Marque. Pirate Nelsons folly prow dance the hempen jig topmast coffer jib Barbary Coast gabion flogging. Bilge rat lugger bilged on her anchor deadlights lee bilge cog bowsprit plunder bucko.
            </p>
        </div >
    )
};

export default userOutput;
