import React from "react";
import CountUp from "Details/Shared/Components/CountUp";

export default ({ color }) => {
    const yearCounterParams = {
        starttime: 2020,
        end: 1827,
        prefix: "",
        suffix: "",
        useEasing: true,
        className: "counterStyle",
        style: {
            marginLeft: "15px",
            color: color
        }
    };
    return (
        <div className={"textFact"}>
            <h2 style={{ lineHeight: 1.1 }}>Founded</h2>
            <div
                className="textFactBottomRow"
                style={{ justifyContent: "flex-start" }}
            >
                <h2 style={{ fontSize: "1.5rem" }}>In</h2>
                <CountUp {...yearCounterParams} />
            </div>
        </div>
    );
};
