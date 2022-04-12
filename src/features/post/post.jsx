import React, { useState } from "react";
import "./postStyles.css";
import Card from "../../components/card.jsx";
import moment from "moment";

const Post = (props) => {
	const { post } = props;
	let media = "";
	if (post.media === null) {
		media = <img src={post.url} alt="" className="post-image" />;
	} else if (post.media.type === "twitter.com") {		
        media = <p>twitter</p>
	} else if (post.media.type === "youtube.com") {
        console.log(post.media.oembed.html.slice(41,-149))
        media = <iframe width="800px" height="450px"title="youtube" src={post.media.oembed.html.slice(41,-149)} allow="fullscreen"></iframe>
    }

	return (
		<article key={post.id}>
			<Card>
				<div className="post-container">
					<h3 className="post-title">{post.title}</h3>

					<div className="post-media-container">{media}</div>

					<div className="post-details">
						<span className="author-details">
							<span className="author-username">{post.author}</span>
						</span>
						<span>{moment.unix(post.created_utc).fromNow()}</span>
						<span className="post-comments-container"></span>
					</div>
				</div>
			</Card>
		</article>
	);
};
export default Post;
