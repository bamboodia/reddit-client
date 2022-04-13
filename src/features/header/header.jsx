import React from "react";
import "./headerstyles.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
	const reddit = useSelector((state) => state.posts);
	const { isLoading, error, searchTerm, selectedSubreddit } = reddit;

	return (
		<div className="header">
			<div className="subreddit-info">
				<div><h3>{reddit.selectedSubreddit.slice(1,-1)}</h3></div>
				<div>options for subreddit</div>
			</div>
			<div className="sorting">
				<div>HOT</div> <div>TOP</div> <div>NEW</div> <div>RISING</div> <div>CONTROVERSIAL</div>
			</div>
		</div>
	);
}
export default Header;
