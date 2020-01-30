import React from "react"
import ipadImage from "Shared/Resources/Images/iPad.png"

interface IpadProps {
    image: string,
    imageClassname: string,
    backgroundColor?: string
}

const Ipad: React.FC<IpadProps> = ({ image, imageClassname, backgroundColor }) => {
    return(
        <div className="ipadContainer">
            {backgroundColor && <div className="ipadBackground" style={{backgroundColor: backgroundColor}}/>}
            <img src={ipadImage} className="ipad"/>
            <img src={image} className={imageClassname}/>
        </div>
    )
}

export default Ipad