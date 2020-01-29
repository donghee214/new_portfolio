import React from "react";
import { CSSTransition } from "react-transition-group";
import usePrevious from "Shared/hooks/usePrevious";
interface DateProps {
    year: string;
    season: number;
}

const DateSeason: React.FC<DateProps> = ({
    year,
    season
}) => {
    const seasonMap = [{
            text: "Winter",
            color: "rgba(78, 162, 187, 0.15)"
        },
        {
            text: "Spring",
            color: "rgba(41, 157, 92, 0.15)"
        },
        {
            text: "Summer",
            color: "rgba(137, 165, 5, 0.15)"
        },
        {
            text: "Fall",
            color: "rgba(255, 107, 47, 0.15)"
        }]
    return (
            <h3 className="dateTime"> 
                {seasonMap.map((obj, index) => 
                        <span className="dateText" style={{
                            color: seasonMap[season].color,
                            opacity: obj.text == seasonMap[season].text && year ? 1 : 0
                        }}>
                            {obj.text} {year}
                    </span>
                )}
            </h3>
       
    );
};

export default React.memo(DateSeason);
