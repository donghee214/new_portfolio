import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ListIndex from "Menu/Shared/components/ListIndex";
import entries from "Shared/Resources/experienceEntries.json";
import { useStateValue } from "Shared/Context/GlobalContext";

//TODO: MAKE THIS LISTEN TO WITHROUTER INSTEAD, need a workaround for React.forwardRef ts
interface ListIndexContainerProps {
    setClickActiveTab: Function;
}

type Ref = HTMLUListElement;

const ListIndexContainer: React.FC<ListIndexContainerProps> = ({
    setClickActiveTab
}) => {
    const [listIndexRef] = useState(React.createRef<HTMLUListElement>());
    const [{ menu }, dispatch] = useStateValue();

    useEffect(() => {
        if (listIndexRef.current) {
            dispatch({
                type: "updateListIndexRef",
                newListIndexRef: listIndexRef.current
            });
        }
    }, [listIndexRef]);

    return (
        <ul className="listScrollContainer" ref={listIndexRef}>
            <li className="listItemBuffer"></li>
            {entries.experiences.map((entryProps, index) => (
                <ListIndex
                    key={entryProps.id}
                    index={index}
                    active={menu.activeTab == index}
                    setClickActiveTab={setClickActiveTab}
                    {...entryProps}
                />
            ))}
            <li className="listItemBuffer"></li>
        </ul>
    );
};

export default ListIndexContainer;
