import React, { useState, useEffect, useRef } from "react";

export const useIntersect: any = ({
    root = null,
    rootMargin = "0px 0px 0px 0px",
    threshold = 0,
    callback
}) => {
    const [entry, updateEntry] = useState({});
    const [node, setNode] = useState(null);
    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                updateEntry(entry);
                const { isIntersecting } = entry;
                if (isIntersecting) {
                    callback();
                }
            },
            {
                root,
                rootMargin,
                threshold
            }
        )
    );
    const disconnect = () => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();
    };
    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();
        if (node) currentObserver.observe(node);
        return () => currentObserver.disconnect();
    }, [node]);
    return [setNode, entry, disconnect];
};
