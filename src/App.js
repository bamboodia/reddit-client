import React from "react";
import "./App.css";
import Sidebar from "./features/sidebar/sidebar.jsx";
import Header from "./features/header/header.jsx";
import Main from "./features/main/main.jsx";

function App() {
	return (
		<div className="App">			
				<Sidebar />			
				<Header />
				<Main />			
		</div>
	);
}

export default App;
