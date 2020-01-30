import React from "react"
import iphoneImage from "Shared/Resources/Images/iphonex.png"

interface IphoneProps{
    image?: string,
    imageClassname?: string,
    imageContainerClassName? : string,
}

const Iphone: React.FC<IphoneProps> = ({ image, imageClassname, imageContainerClassName }) => {
    return (
        <div className={`${imageContainerClassName} iphoneContainer`}>
            <img src={iphoneImage} className="iphone"/>
            <img src={image} className={imageClassname}/>
        </div>
    )
}

export default Iphone