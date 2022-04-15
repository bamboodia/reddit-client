import React from "react";
import "./App.css";
import Sidebar from "./features/sidebar/sidebar.jsx";
import Header from "./features/header/header.jsx";
import Main from "./features/main/main.jsx";
import {useSelector} from 'react-redux';

function App() {
	const options = useSelector((state) => state.options);	
	return (
		<div className="App" data-theme={options.darkMode}>
			<Sidebar />
			<Header />
			<Main />
		</div>
	);
}

export default App;
