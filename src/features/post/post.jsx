import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./postStyles.css";
import Card from "../../components/card.jsx";
import moment from "moment";
import abbreviate from '../../utils/abbreviateNumber'
import { setSelectedSubreddit, selectSelectedSubreddit } from "../../store/postsSlice";

const Post = (props) => {
	const { post } = props;
	const dispatch = useDispatch();	
	return (
		<article key={post.id}>
			<Card>
				<div className="post-container" >
					<div className="post-votes">						
						<i className="fa-solid fa-caret-up"></i>
						<div className="votes">{abbreviate(post.score, 1, false, false)}</div>
						<i className="fa-solid fa-caret-down"></i>
					</div>
					<div className="post-media-container"  style={{ backgroundImage: `url(${post.thumbnail})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
						
					</div>
					<div className="post-details">
						<h5 className="post-title">{post.title}</h5>
						<span className="author-details">
							<span className="author-username">
								Submitted <span>{moment.unix(post.created_utc).fromNow()}</span> by {post.author} to <span className="subreddit" onClick={() => dispatch(setSelectedSubreddit(`/${post.subreddit_name_prefixed}`))} >{post.subreddit}</span>
							</span>
						</span>
						<span className="post-comments-container"></span>
					</div>
				</div>
			</Card>
		</article>
	);
};
export default Post;
