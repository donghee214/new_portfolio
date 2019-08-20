import React from 'react'
import Menu from 'Menu/Menu'
import Details from 'Details/Details'
import 'Shared/globalStyles.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App: React.FC = () => {
	
	return (
			<div className="App">
				<Router>
					<Switch>
						<Route path ="/details/:id" component={Details} />	
						<Route path="/" component={Menu} />																		
					</Switch>	
				</Router>
			
			</div>

	);
}

export default App;
