import React from "react";
import CountUp from "Details/Shared/Components/CountUp";

export default ({ color }) => {
    const tuitionCounterParams = {
        starttime: 1,
        prefix: "$",
        suffix: "k",
        end: 99,
        duration: 3,
        useEasing: false,
        className: "counterStyle",
        style: {
            color: color,
            fontSize: "2rem"
        }
    };
    return (
        <div className={"textFact imageBottom"}>
            <h2 style={{ lineHeight: 1.1, marginLeft: "-0.1rem" }}>Tutition</h2>
            <div className="textFactBottomRow">
                <div className="textFactVertical">
                    <h2 style={{ fontSize: "1.4rem" }}>Thats</h2>
                    <h2
                        style={{
                            fontSize: "0.5rem",
                            marginLeft: "0.1rem",
                            marginTop: "0.2rem"
                        }}
                    >
                        Too damn high
                    </h2>
                </div>
                <CountUp {...tuitionCounterParams} />
            </div>
        </div>
    );
};
