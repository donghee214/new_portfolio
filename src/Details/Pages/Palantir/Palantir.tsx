import React from "react";
import Details from "Details/Details"
import PalantirLogo from "Details/Shared/Components/PalantirLogo"
import FoundryImage from "Shared/Resources/Images/foundryApp.jpg"
import { withRouter, RouteComponentProps } from "react-router";
import Ipad from "Details/Shared/Components/Ipad"

interface PalantirProps extends RouteComponentProps {}

const Palantir: React.FC<PalantirProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <PalantirLogo />
            </Details>
            <div className="palantirTopSection">
                <Ipad image = {FoundryImage} imageClassname={"palantirFoundry"}/>
                <div className="quotationContainer">
                    <p className="quotationText">
                        <span className="greyedTagline">Human Driven </span>
                        Workflows.
                    </p>
                </div>
            </div>
            <div className="contentContainer" style={{paddingTop: 0}}>
                <div className="contentDetailPart1">
                    <p style={{fontSize: "0.7rem"}}> 
                        The first project revoled around working closely with users in building and iterating on features and toolsets that created new <span className="palantirBold">workflows</span> for them that was previously
                        not possible. This involved building out new <span className="palantirBold">RESTful</span> endpoints, <span className="palantirBold">restructuring schemas</span>, and
                        building out a HQL to SQL <span className="palantirBold">transpiler</span> to migrate over more complex data queries. This was because HQL was in the process of being phased out
                        and roughly <span className="palantirBold">1000</span> key workflows needed to be migrate onto our platform one to one, hence a more automated solution was needed.
                    </p>
                    <br/>
                    <p style={{fontSize: "0.7rem"}}> 
                        The second project was working on optimizing energy production from <span className="palantirBold">wind farms</span>. With a steady stream of real-time
                        data from a variety of instruments all of that data had to presented in a useful manner for the site manager
                        to operate with maximum efficiency. This involved a lot of <span className="palantirBold">iterations</span> with site managers to learn about their needs and 
                        requirements such that the <span className="palantirBold">front-end</span> was well reflected on what they needed to see and do regarding each individual wind turbine.
                    </p>
                </div>

            </div>
           
        </div>
        )
    ;
};

export default withRouter(Palantir);
