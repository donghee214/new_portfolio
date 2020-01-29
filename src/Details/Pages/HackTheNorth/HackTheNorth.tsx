import React from "react"
import Details from "Details/Details"
import HackTheNorthLogo from "Details/Shared/Components/HackTheNorthLogo"
import { RouteComponentProps } from "react-router";

interface HackTheNorthProps extends RouteComponentProps{} 

const HackTheNorth: React.FC<HackTheNorthProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <HackTheNorthLogo />
            </Details>
        </div>
    )
}

export default HackTheNorth