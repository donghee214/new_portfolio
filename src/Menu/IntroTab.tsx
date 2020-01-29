import React from "react";
import { useIntersect } from "Shared/hooks/useIntersect";
import { useStateValue } from "Shared/Context/GlobalContext";

interface IntroTabProps  {
    active: boolean;
    index: number;
}

const IntroTab: React.FC<IntroTabProps> = ({
    active,
    index
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

    return (
        <li className="listItemContainer">
            <div
                className={`contentsContainer ${active ? "visible" : null}`}
                ref={newref}
            >   
            <div style={{textAlign:"center"}}>
                <h2
                    style={{
                        textAlign: "center",
                        paddingBottom: "0.75rem",
                        lineHeight: 1.2
                    }}
                >
                    Hi!
  
                </h2>
                <h3>
                    My name is Dan, a <span className="blueThemedFont">
                            Developer
                        </span> and <span className="blueThemedFont">
                            Product Designer
                        </span>
                        .
                </h3>
                <h3 style={{padding: "0.5rem 0"}}>
                    From Toronto and currently living in New York City.
                </h3>
            </div>

            </div>
            
        </li>
    )
}

export default React.memo(IntroTab)