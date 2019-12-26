import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import usePrevious from "Shared/hooks/usePrevious";
interface DateProps {
    year: string;
    season: number;
    activeTab: number;
    totalEntries: number;
}

const Date: React.FC<DateProps> = ({
    year,
    season,
    activeTab,
    totalEntries
}) => {
    // const prevDate = usePrevious({ year: year ? year : "2020", season });
    // let animationType = "moveDown";
    // useEffect(() => {
    //     let currYear = parseInt(prevDate.year);
    //     let newYear = parseInt(year);
    //     if (currYear > newYear) {
    //         animationType = "moveDown";
    //     } else if (currYear < newYear) {
    //         animationType = "moveUp";
    //     } else {
    //         if (prevDate.season >= season) {
    //             animationType = "moveDown";
    //         } else {
    //             animationType = "moveUp";
    //         }
    //     }
    // }, [year, season]);
    return (
        <div className="year">
            <h3 className="yearStyling">{year}</h3>
            {/* <h3>{year[0]}</h3>
            <h3>{year[1]}</h3>
            <h3>{year[2]}</h3>
            <h3>{year[3]}</h3> */}
        </div>
    );
};

export default React.memo(Date);
