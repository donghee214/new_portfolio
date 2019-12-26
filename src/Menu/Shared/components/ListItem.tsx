import React, { useState, useEffect, useRef } from "react";
import Arrow from "Shared/Components/Arrow";
import { ExperienceEntryProps } from "Shared/Types/experienceEntryType";
import { useIntersect } from "Shared/hooks/useIntersect";
import { withRouter, RouteComponentProps } from "react-router";
import { useStateValue } from "Shared/Context/GlobalContext";

interface ListItemProps extends RouteComponentProps {
    active: boolean;
    index: number;
    props: ExperienceEntryProps;
}

const ListItem: React.FC<ListItemProps> = ({
    props,
    index,
    history,
    active
}) => {
    const [{}, dispatch] = useStateValue();
    const [newref, entry] = useIntersect({
        threshold: 0.5,
        callback: () => {
            dispatch({
                type: "updateActiveTab",
                newTab: index
            });
        }
    });

    const viewDetails = () => {
        history.push({
            pathname: `/details/${props.title}`,
            state: {
                transition: "scale",
                duration: 600,
                index,
                ...props
            }
        });
    };

    return (
        <li className="listItemContainer">
            <div
                className={`contentsContainer ${active ? "visible" : null}`}
                onClick={viewDetails}
                ref={newref}
            >
                <h2
                    style={{
                        textAlign: "center",
                        paddingBottom: "10px",
                        lineHeight: 1.2
                    }}
                >
                    {props.title}
                </h2>
                <h3 style={{ textAlign: "center" }}>{props.subTitle}</h3>

                {/* <h3>{props.description}</h3> */}

                {/* <div className="arrowComposition">
                    <div className="spine" />
                    <Arrow className={"mediumArrow"} />
                    <svg className="circle" stroke={props.color}>
                        <circle className="outer" cx="60" cy="60" r="40" />
                    </svg>
                </div> */}
            </div>
        </li>
    );
};

export default withRouter(React.memo(ListItem));
