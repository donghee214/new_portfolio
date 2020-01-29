import React, { Suspense } from "react";
import "Details/Shared/Details.css";

interface DetailsProps {
    state: {
        title: string;
        city: string;
        year: string;
        color: string;
        subTitle: string;
        secondaryColor: string;
    };
    children: React.ReactElement;
}

const Details: React.FC<DetailsProps> = ({ state, children }) => {
    return (
        <div>
            <div
                className="topSection"
                style={{ backgroundColor: state.color }}
            >
                <div className="titleContainer">
                    {children}
                    <div>
                        <h3 className="subTitle">{state.subTitle}</h3>
                        <h2
                            className="nameTitle"
                            style={{ color: state.secondaryColor }}
                        >
                            {state.title}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="detailsPadding">
                <div className="metaData">
                    <p
                        className={"metaDataText"}
                        style={{ color: state.color }}
                    >
                        {state.city}
                    </p>
                    <p
                        className={"metaDataText"}
                        style={{ color: state.color }}
                    >
                        {state.year}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;
