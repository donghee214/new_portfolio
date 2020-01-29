import React, { useState, useEffect, useRef } from "react";
import "Menu/Shared/Menu.css";
import ListItemContainer from "Menu/ListItemContainer";
import Date from "Menu/Shared/components/Date";
import { useStateValue } from "Shared/Context/GlobalContext";
import Background from "Shared/Resources/Background/Background";
import entries from "Shared/Resources/experienceEntries.json";
interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
    const [{ menu }, dispatch] = useStateValue();
    return (
        <div className="menuContainer">
            <ListItemContainer experiences={entries.experiences} />
            <Background 
                season={entries.experiences[menu.activeTab].season} 
                year={entries.experiences[menu.activeTab].year} 
            />
        </div>
    );
};

export default React.memo(Menu);
