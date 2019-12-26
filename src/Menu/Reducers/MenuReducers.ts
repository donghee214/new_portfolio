export const menuInitialState = {
    activeTab: 0,
    listItemRef: null,
    listIndexRef: null,
    listIndexHeight: 128
};

export const menuReducer = (state, action) => {
    // console.log("reducer updating");
    switch (action.type) {
        case "updateActiveTab":
            return {
                ...state,
                activeTab: action.newTab
            };
        case "updateListItemRef":
            console.log(action.newListItemRef);
            return {
                ...state,
                listItemRef: action.newListItemRef
            };
        case "updateListIndexRef":
            return {
                ...state,
                listIndexRef: action.newListIndexRef
            };
        default:
            return state;
    }
};
