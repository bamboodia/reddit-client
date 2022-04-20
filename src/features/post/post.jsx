import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./postStyles.css";
import abbreviate from "../../utils/abbreviateNumber";
import moment from "moment";
import { showPost } from "../../store/postsSlice";

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
	});
}

const Post = (props) => {
	const post = props.props;
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, props);
	const renderMedia = () => {
		if (post.selftext === "") {
			if (post.secure_media !== null) {
				const video = post.secure_media_embed.content.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
				console.log(video)
				return <div className="video-container"><iframe title="video" class="video" src={video.slice(38, -140)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>;
			} else {
				return (
					<div className="media">
						<img src={post.url} alt="" />
					</div>
				);
			}
		} else {
			return (
				<div className="media">
					<p>{post.selftext}</p>
				</div>
			);
		}
	};
	const renderComments = (comment) => {
		if (comment.replies === "") {
			return <div className="noReply"></div>;
		} else {
			const comments = comment.replies.data.children.filter((comment) => comment.kind !== "more");
			return comments.map((reply) => (
				<div className="reply" id={reply.id}>
					<div className="reply-author">{reply.data.author}</div>
					<div className="reply-body">{reply.data.body}</div>
				</div>
			));
		}
	};
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
				{renderMedia()}
				<div className="comments">
					<div>
						{post.comments
							.filter((comment) => !comment.count)
							.map((comment) => (
								<div className="comment-container" key={comment.id}>
									<div className="comment-votes">
										<i className="fa-solid fa-caret-up"></i>
										<div className="comment-score">{abbreviate(comment.score, 0, false, false)}</div>
										<i className="fa-solid fa-caret-down"></i>
									</div>
									<div className="comment">
										<div className="author">
											<span>{comment.author}</span> <span className="ago">{moment.unix(comment.created_utc).fromNow()}</span>
										</div>
										<div className="body">
											<p>{comment.body}</p>
										</div>
										<div className="replies">{renderComments(comment)}</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
