import React from 'react'
import Menu from 'Menu/Menu'
import 'Shared/globalStyles.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
	
	return (
		<Router>
			<div className="App">
				<Route path="/" component={Menu} />
			</div>
		</Router>

	);
}

export default App;
