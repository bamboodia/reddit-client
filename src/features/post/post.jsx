import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./postStyles.css";
import abbreviate from "../../utils/abbreviateNumber";
import moment from "moment";
import { setSelectedSubreddit, selectSelectedSubreddit, showPost } from "../../store/postsSlice";

function useOutsideAlerter(ref, props) {
	const { index } = props;
	const dispatch = useDispatch();
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				dispatch(showPost(index));
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

const Post = (props) => {
	const post = props.props;
	const dispatch = useDispatch();
	const wrapperRef = useRef(null);
	console.log(post.comments);
	useOutsideAlerter(wrapperRef, props);
	return (
		<div ref={wrapperRef} className="post">
			<div className="post-votes">
				<i className="fa-solid fa-caret-up"></i>
				<div className="votes">{abbreviate(post.score, 0, false, false)}</div>
				<i className="fa-solid fa-caret-down"></i>
			</div>
			<div className="post-main">
				<div className="title">
					<div>
						<h3 className="post-title">{post.title}</h3>
					</div>
					<div>
						Submitted <span>{moment.unix(post.created_utc).fromNow()}</span> by {post.author}
					</div>
				</div>
				<div className="media">
					<img src={post.url} alt="" />
				</div>
				<div className="info"></div>
				<div className="comments">
					<div>
						{post.comments.map((comment) => (
							<div className="comment" key={comment.id}>
								<div><span className="author">{comment.author}</span> <span className="ago">{moment.unix(comment.created_utc).fromNow()}</span></div>
								<div className="body"><p>{comment.body}</p></div>
																
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
