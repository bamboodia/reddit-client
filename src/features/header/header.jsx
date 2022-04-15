import React from "react";
import "./headerstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from '../../store/optionsSlice'

const Header = () => {
	const reddit = useSelector((state) => state.posts);	
	const dispatch = useDispatch();
	const options = useSelector((state) => state.options);	
	return (
		<div className="header" data-theme={options.darkMode}>
			<div className="subreddit-info">
				<div><h3>{reddit.selectedSubreddit.slice(1,-1)}</h3></div>
				<div className="darkmode" onClick={() => dispatch(setMode())}>darkmode</div>
			</div>
			<div className="sorting">
				<div>HOT</div> <div>TOP</div> <div>NEW</div> <div>RISING</div> <div>CONTROVERSIAL</div>
			</div>
		</div>
	);
}
export default Header;
