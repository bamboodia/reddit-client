import React from 'react';
import './postStyles.css';
import './loadingPost.css';
import Card from "../../components/card.jsx";
import moment from "moment";

const loadingPost = (props) => {
  const { post } = props;	
  return (
    <article key={post.id}>
			<Card>
				<div className="post-container" >
					<div className="post-votes">						
						<i className="fa-solid fa-caret-up"></i>
						<div className="votes"></div>
						<i className="fa-solid fa-caret-down"></i>
					</div>
					<div className="post-media-container"  style={{ backgroundImage: `url(${post.thumbnail})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
						
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

export default loadingPost;
