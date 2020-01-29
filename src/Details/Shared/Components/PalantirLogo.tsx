import React from "react";

export default ({ className }: { className?: string }) => (
    <svg
        x="0px"
        y="0px"
        viewBox="15 15 30 30"
        fill="#FFF"
        className={className ? className : "palantirDefault"}
    >
        <path d="M30.5,18.5c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1S35.5,18.5,30.5,18.5z" />
        <path
            fill="#000"
            d="M30.5,33.9c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3C36.7,31.1,33.9,33.9,30.5,33.9z"
        />
        <polygon points="38.6,35.9 30.5,39.4 22.4,35.9 21,38.4 30.5,42.4 40,38.4 " />
    </svg>
);
