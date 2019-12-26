import React from "react";
import Details from "Details/Details";
import UofTLogo from "Details/Shared/Components/UoftLogo";
import { withRouter, RouteComponentProps } from "react-router";
import YearOriginated from "Details/Pages/UofT/YearOriginated";
import Rank from "Details/Pages/UofT/Rank";
import Tuition from "Details/Pages/UofT/Tuition";
import "Details/Shared/Details.css";
import { start } from "repl";
interface UofTProps extends RouteComponentProps {}

const UofT: React.FC<UofTProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <UofTLogo />
            </Details>
            <div className="contentContainer">
                <section className="imageMetadata">
                    <YearOriginated color={location.state.color} />
                    <Rank color={location.state.color} />
                    <Tuition color={location.state.color} />
                </section>
                <div className="quotationContainer">
                    <p className="quotationText">
                        <span className="greyedTagline">Boundless. </span>
                        Wait is our mascot a colour?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(UofT);
