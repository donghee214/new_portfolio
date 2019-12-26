import React, { useState, useEffect } from "react";
import ListItem from "Menu/Shared/components/ListItem";
import { ExperienceEntryProps } from "Shared/Types/experienceEntryType";
import { useWindowHeight } from "Shared/hooks/useWindowHeight";
import { useWindowRatio } from "Shared/hooks/useWindowRatio";
import { useStateValue } from "Shared/Context/GlobalContext";
interface ListItemContainerProps {
    experiences: ExperienceEntryProps[];
}

const ListItemContainer: React.FC<ListItemContainerProps> = ({
    experiences
}) => {
    const listItemRef = React.createRef<HTMLUListElement>();
    const [{ menu }, dispatch] = useStateValue();
    const scrollRatio = useWindowRatio(menu.listIndexHeight);
    const windowHeight = useWindowHeight(window.innerHeight);
    useEffect(() => {
        if (listItemRef.current) {
            listItemRef.current.scrollTop = windowHeight * menu.activeTab;
        }
    }, []);

    return (
        <ul className="scrollContainer" ref={listItemRef}>
            {experiences.map((entryProps, index) => (
                <ListItem
                    index={index}
                    active={menu.activeTab === index}
                    key={entryProps.id}
                    props={entryProps}
                />
            ))}
        </ul>
    );
};

export default React.memo(ListItemContainer);
