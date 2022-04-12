import React from "react";
import "./headerstyles.css";

const Header = () => {
	return (
		<div className="header">
			<div className="subreddit-info">
				<div><h3>r/subreddit</h3></div>
				<div>options for subreddit</div>
			</div>
			<div className="sorting">
				<div>HOT</div> <div>TOP</div> <div>NEW</div> <div>RISING</div> <div>CONTROVERSIAL</div>
			</div>
		</div>
	);
}
export default Header;
