import React, { useState } from "react";
import "./postStyles.css";
import Card from "../../components/card.jsx";
import moment from "moment";
import abbreviate from '../../utils/abbreviateNumber'

const Post = (props) => {
	const { post } = props;
	return (
		<article key={post.id}>
			<Card>
				<div className="post-container">
					<div className="post-votes">
						<div className="post-rank">{props.rank}</div>
						<button></button>
						<div className="votes">{abbreviate(post.score, 1, false, false)}</div>
						<button></button>
					</div>
					<div className="post-media-container">
						<img src={post.thumbnail} alt="" className="post-image" />
					</div>
					<div className="post-details">
						<h5 className="post-title">{post.title}</h5>
						<span className="author-details">
							<span className="author-username">
								Submitted <span>{moment.unix(post.created_utc).fromNow()}</span> by {post.author} to {post.subreddit}
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
