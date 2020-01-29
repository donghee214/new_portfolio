import React from "react"
import ipadImage from "Shared/Resources/Images/iPad.png"

interface IpadProps {
    image: string,
    imageClassname: string
}

const Ipad: React.FC<IpadProps> = ({ image, imageClassname }) => {
    return(
        <div className="ipadContainer">
            <img src={ipadImage} className="ipad"/>
            <img src={image} className={imageClassname}/>
        </div>
    )
}

export default Ipad