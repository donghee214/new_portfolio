import React from "react"
import Details from "Details/Details"
import HackTheNorthLogo from "Details/Shared/Components/HackTheNorthLogo"
import Ipad from "Details/Shared/Components/Ipad"
import Htn1 from "Shared/Resources/Images/htn1.jpg"
import { RouteComponentProps } from "react-router";

interface HackTheNorthProps extends RouteComponentProps{} 

const HackTheNorth: React.FC<HackTheNorthProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <HackTheNorthLogo />
            </Details>
            <div className="htnTopSection">
                <div className="quotationContainer">
                    <p className="quotationText">
                        <span className="greyedTagline">Find your favourite artists </span>
                        Popularity.
                    </p>
                </div>
                <Ipad image={Htn1} imageClassname={"htn1"} backgroundColor={"#FFFFFF"}/>
            </div>
            
        </div>
    )
}

export default HackTheNorth