import React from "react";
import "./App.css";
import Sidebar from "./features/sidebar/sidebar.jsx";
import Header from "./features/header/header.jsx";
import Main from "./features/main/main.jsx";
import { auth } from "./api/officialApi";
import { ParseHash } from "./utils/parseHash";

function App() {
	if (window.location.hash) {
		ParseHash(window.location.hash);
	}
	return (
		<div className="App">
			<Sidebar login={auth} />
			<Header />
			<Main />
		</div>
	);
}

export default App;
