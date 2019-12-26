import React, { useState, useEffect } from "react";

interface ListIndexProps {
    indexChar: string;
    year: string;
    color: string;
    index: number;
    setClickActiveTab: Function;
    active: Boolean;
}

const ListIndex: React.FC<ListIndexProps> = ({
    index,
    indexChar,
    year,
    color,
    setClickActiveTab,
    active
}) => {
    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    };
    const updateActiveTab = () => {
        setClickActiveTab(index);
    };

    return (
        <li
            className="listIndexContainer"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={updateActiveTab}
        >
            <div className="indexCharContainer">
                <h2 className="indexChar">{indexChar}</h2>
                <p
                    className="yearIndex"
                    style={{
                        color: isHover || active ? color : "rgba(0,0,0,0.3)"
                    }}
                >
                    {year}
                </p>
            </div>
        </li>
    );
};

export default ListIndex;
