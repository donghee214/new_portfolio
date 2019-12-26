import React, { useRef, useEffect } from "react";
import Menu from "Menu/Menu";
import Details from "Details/Details";
import "Shared/globalStyles.css";
import { UofT } from "Details/Pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { StateProvider } from "Shared/Context/GlobalContext";
import { mainReducer, mainInitialState } from "Shared/Reducers/MainReducer";

const App: React.FC = () => {
    return (
        <div className="App">
            <StateProvider
                initialState={mainInitialState}
                reducer={mainReducer}
            >
                <Router>
                    <Route
                        render={({ location }) => (
                            <TransitionGroup
                                childFactory={child =>
                                    React.cloneElement(child, {
                                        classNames: location.state
                                            ? location.state.transition
                                            : "scale",
                                        timeout: location.state
                                            ? location.state.duration
                                            : 600
                                    })
                                }
                            >
                                <CSSTransition key={location.key}>
                                    <Switch location={location}>
                                        <Route
                                            path="/details/University of Toronto"
                                            component={UofT}
                                        />
                                        <Route path="/" component={Menu} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                </Router>
            </StateProvider>
        </div>
    );
};

export default App;
