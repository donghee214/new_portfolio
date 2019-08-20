import React, { useState, useEffect } from 'react'
import Arrow from 'Shared/Components/Arrow'
import { number } from 'prop-types';

interface ListItemProps {
    title: string,
    subTitle: string,
    description: string,
    header?: string,
    color: string,
    active: boolean
}

const ListItem: React.FC<ListItemProps> = ({ color, title, subTitle, description, active }) => {
    return (
        <li className="listItemContainer">
            <div className="contentsContainer">
                <div>
                    <h3>
                        {subTitle}
                    </h3>
                    <h2 className="h2Alignh3">
                        {title}
                    </h2>
                    <h3>
                        {description}
                    </h3>
                </div>
                <div className="arrowComposition">
                    <div className="spine" />
                    <Arrow className={"mediumArrow"} />
                    <svg className="circle" stroke={color}>
                        <circle className="outer" cx="60" cy="60" r="40" />
                    </svg>
                </div>
            </div>
        </li>
    )
}

export default ListItem