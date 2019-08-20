import React, { useState, useEffect } from 'react'

interface ListIndexProps {
    indexChar: string,
    year: string,
    color: string,
    active: boolean,
    order: number,
    history: any
}

const ListIndex: React.FC<ListIndexProps> = ({ history, order, active, indexChar, year, color }) => {
    const [isHover, setIsHover] = useState(false)
    const toggleHover = () => {
        setIsHover(!isHover)
    }
    const updatePath = () => {
        history.push(order.toString() + '-!')
    }

    return (
        <li className="listIndexContainer"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={updatePath}>
            <div className="indexCharContainer">
                <h2 className="indexChar">
                    {indexChar}
                </h2>
                <p className="yearIndex" style={{ color: isHover || active ? color : "rgba(0,0,0,0.3)" }}>
                    {year}
                </p>
            </div>
        </li>
    )
}

export default ListIndex