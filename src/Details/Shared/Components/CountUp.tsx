import React from "react";
import { useCountUp } from "react-countup";
import { useIntersect } from "Shared/hooks/useIntersect";

interface CountUpProps {
    style?: any;
    className?: string;
    starttime: number;
    end: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    useEasing?: boolean;
}

export default ({
    style,
    className,
    starttime,
    end,
    prefix,
    suffix,
    duration,
    useEasing
}: CountUpProps) => {
    const { countUp, start } = useCountUp({
        start: starttime,
        end,
        prefix,
        suffix,
        duration,
        useEasing,
        preserveValue: true,
        onStart: () => {
            disconnect();
        }
    });
    const [ref, entry, disconnect] = useIntersect({
        threshold: 0.5,
        callback: () => {
            start();
        }
    });
    return (
        <div ref={ref} className={className} style={style}>
            {countUp}
        </div>
    );
};
