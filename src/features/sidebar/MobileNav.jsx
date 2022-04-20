import React, { useEffect } from "react";
import "./MobileNavStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, selectSubreddits } from "../../store/subredditsSlice";
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/postsSlice";

const MobileNav = (props) => {
	const dispatch = useDispatch();
	const subreddits = useSelector(selectSubreddits);
	const reddit = useSelector((state) => state.subreddits);
	const { isLoading, error } = reddit;

	useEffect(() => {
		dispatch(fetchSubreddits());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className="mobilenav">
				<div>Loading....</div>
			</div>
		);
	}

	return (
		<div id="menuToggle">
			<input type="checkbox" />
			<span></span>
			<span></span>
			<span></span>
			<div id="menu">
                <h4>Subreddits</h4>
				<div className="subreddits">
					<ul className="subreddits-list">
						{subreddits.map((subreddit) => (
							<li key={subreddit.id} className="subreddit">
								<button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
									<img src={subreddit.icon_img || "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"} alt={`${subreddit.display_name}`} className="subreddit-icon" style={{ border: `4px solid ${subreddit.primary_color}` }} />
									{subreddit.display_name_prefixed}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="info">
					{" "}
					<ul>
						<li>
							<i className="fa-solid fa-circle-info"></i>About
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
