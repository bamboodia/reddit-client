import React from "react";
import "./App.css";
import Sidebar from "./features/sidebar/sidebar.jsx";
import Header from "./features/header/header.jsx";
import Card from "./components/card.jsx";

function App() {
	return (
		<div className="App">
			<div className="sidebar-app">
				<Sidebar />
			</div>
			<div className="main-app">
				<Header />
				<div className="cards-app">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
