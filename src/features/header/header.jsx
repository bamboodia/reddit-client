import React from "react";
import "./headerstyles.css";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../store/optionsSlice";
import MobileNav from "../sidebar/MobileNav";
import { setSelectedSubreddit, setSort, fetchPosts } from "../../store/postsSlice";

const Header = () => {
	const reddit = useSelector((state) => state.posts);
	const { isLoading, selectedSubreddit, sorting } = reddit;
	const dispatch = useDispatch();
	const options = useSelector((state) => state.options);	

	return (
		<div className="header" data-theme={options.darkMode}>
			<div className="subreddit-info">
				<MobileNav />
				<div className="subreddit-name">
					<h3>{reddit.selectedSubreddit.slice(1)}</h3>
				</div>
				<div className="search"><input type="text"/></div>
				<div className="darkmode">
					<div className="toggle-btn" id="_1st-toggle-btn">
						<input type="checkbox" onClick={() => dispatch(setMode())} />
						<span></span>
					</div>
				</div>
			</div>

			<div className="sorting">
				<ul>
					<li className="sort" onClick={() => dispatch(fetchPosts(`${selectedSubreddit}hot`))} >
						HOT
					</li>
					<li className="sort" onClick={() => dispatch(fetchPosts(`${selectedSubreddit}top`))}>
						TOP
					</li>
					<li className="sort" onClick={() => dispatch(fetchPosts(`${selectedSubreddit}new`))}>
						NEW
					</li>
					<li className="sort" onClick={() => dispatch(fetchPosts(`${selectedSubreddit}rising`))}>
						RISING
					</li>
					<li className="sort" onClick={() => dispatch(fetchPosts(`${selectedSubreddit}controversial`))}>
						CONTROVERSIAL
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
