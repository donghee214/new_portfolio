import { menuReducer, menuInitialState } from "Menu/Reducers/MenuReducers";

export const mainInitialState = {
    menu: {
        ...menuInitialState
    }
};

export const mainReducer = ({ menu }, action) => ({
    menu: menuReducer(menu, action)
});
