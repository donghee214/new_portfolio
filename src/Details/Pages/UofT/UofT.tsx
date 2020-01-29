import React from "react";
import Details from "Details/Details";
import UofTLogo from "Details/Shared/Components/UoftLogo";
import { withRouter, RouteComponentProps } from "react-router";
import YearOriginated from "Details/Pages/UofT/YearOriginated";
import Rank from "Details/Pages/UofT/Rank";
import Tuition from "Details/Pages/UofT/Tuition";
import "Details/Shared/Details.css";

interface UofTProps extends RouteComponentProps {}

const UofT: React.FC<UofTProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <UofTLogo />
            </Details>
            <div className="contentContainer">
                <div className="quotationContainer">
                    <p className="quotationText">
                        <span className="greyedTagline">Boundless. </span>
                        Wait is our mascot a colour?
                    </p>
                </div>
                <div className="contentDetailPart1">
                    <p style={{fontSize: "0.7rem"}}> 
                        Starting back in <span className="uoftBold">2015</span>, I had embarked my degree in <span className="uoftBold">Mechatronics Engineering.</span> Although
                        this turned out to be something I didn't want to pursue a career in, it gave me access to resources
                        to build and create physical projects. By 3rd year, after deciding that <span className="uoftBold">software development</span> was better suited for me,
                        it gave me the opportunity to better understand the interactions between <span className="uoftBold">hardware</span> and <span className="uoftBold">software.</span>
                    </p>
                    <br/>
                    <p style={{fontSize: "0.7rem"}}> 
                        After my third year, most students do their Professional Experience Year (PEY) Co-op, where they take
                        go work for a year, however I had decided on breaking this year into 4 month slices of working at different companies. This involved
                        working at Toronto startups like <span className="uoftBold">Condos.ca</span> and <span className="uoftBold">Secret Mission Software</span> to
                        big tech like <span className="uoftBold">Palantir</span>. Admittedly, in between these 4 month co-ops I had done a study abroad in Hong Kong 
                        at the <span className="uoftBold">University of Hong Kong</span> to specialize further into computer science.
                    </p>
                    <br />
                    <p style={{fontSize: "0.7rem"}}> 
                        My final year at UofT involved a lot of project based courses from designing and building a <span className="uoftBold">rescue drone</span> for our 
                        capstone to training a <span className="uoftBold">neural network</span> to predict the popularity of new song releases. And now, some facts
                        about the University of Toronto:
                    </p>
                </div>
                <section className="imageMetadata">
                    <YearOriginated color={location.state.color} />
                    <Rank color={location.state.color} />
                    <Tuition color={location.state.color} />
                </section>
            </div>

        </div>
    );
};

export default withRouter(UofT);
