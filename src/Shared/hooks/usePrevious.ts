import { useRef, useEffect } from "react";

const usePrevious: any = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    if (!ref.current) {
        return {};
    }
    return ref.current;
};

export default usePrevious;
