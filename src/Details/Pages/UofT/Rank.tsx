import React from "react";
import CountUp from "Details/Shared/Components/CountUp";

export default ({ color }) => {
    const rankCounterParams = {
        starttime: 99,
        prefix: "",
        suffix: "",
        useEasing: true,
        end: 18,
        className: "counterStyle",
        style: { color: color }
    };
    return (
        <div className={"textFact imageCenter"}>
            <h2 style={{ lineHeight: 1.1 }}>Ranked</h2>
            <div className="textFactBottomRow">
                <CountUp {...rankCounterParams} />
                <div className="textFactVertical">
                    <h2 style={{ fontSize: "0.75rem" }}>In the</h2>
                    <h2 style={{ fontSize: "1.5rem" }}>World</h2>
                </div>
            </div>
        </div>
    );
};
