import React, { useState, useEffect } from 'react'
import Arrow from 'Shared/Components/Arrow'
import entries from 'Shared/Resources/experienceEntries.json'
import { number } from 'prop-types';
import { RouteComponentProps } from 'react-router'

interface ListItemProps{
    title: string,
    subTitle: string,
    description: string,
    header?: string,
    color: string,
    history: any,
    active: boolean,
    match: any
}

const ListItem: React.FC<ListItemProps> = ({ color, title, subTitle, description, active, history }) => {    
    const viewDetails = () => {
        history.push(`/details/${title}`)
    }
    return (
        <li className="listItemContainer">
            <div className="contentsContainer" onClick={viewDetails}>
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