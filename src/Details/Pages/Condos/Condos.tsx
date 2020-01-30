import React from "react"
import Details from "Details/Details"
import CondosLogo from "Details/Shared/Components/CondosLogo"
import Iphone from "Details/Shared/Components/Iphone"
import iphoneImage1 from "Shared/Resources/Images/condosiphone3.png"
import iphoneImage2 from "Shared/Resources/Images/condosiphone2.png"
import iphoneImage3 from "Shared/Resources/Images/condosiphone1.png"
import { RouteComponentProps } from "react-router";

interface CondosProps extends RouteComponentProps {}

const Condos:React.FC<CondosProps> = ({ location }) => {
    return (
        <div className="detailsContainer">
            <Details state={location.state}>
                <CondosLogo />
            </Details>
            <div className="detailsPadding tripletTopSection">
                <div className="tripletContainer">
                    <p className="quotationText">
                        <span className="greyedTagline">Log in, </span>
                        Sync.
                    </p>
                    <Iphone image={iphoneImage1} imageClassname={"condosIphoneImageStyling"}/>
                </div>

                <div className="tripletContainer midTriplet">
                    <p className="quotationText">
                        <span className="greyedTagline">View, </span>
                        Organize.
                    </p>
                    <Iphone image={iphoneImage2} imageClassname={"condosIphoneImageStyling"}/>
                </div>
                <div className="tripletContainer endTriplet">
                    <p className="quotationText">
                        <span className="greyedTagline">Track, </span>
                        Watch.
                    </p>
                    <Iphone image={iphoneImage3} imageClassname={"condosIphoneImageStyling"}/>
                </div>
                    
            </div>
        </div>
    )
}

export default Condos