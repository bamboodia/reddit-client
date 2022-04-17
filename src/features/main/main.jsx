import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./mainstyles.css";
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments, showPost } from "../../store/postsSlice";
import Posts from "../post/posts.jsx";

const Main = () => {
	const reddit = useSelector((state) => state.posts);
	const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
	const posted = useSelector(selectFilteredPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts(selectedSubreddit));
	}, [selectedSubreddit]);	

	const getPost = (index) => {
		const getPost = (permalink) => {
			dispatch(fetchComments(index, permalink))
		};
		return getPost
	}
	
	if (isLoading) {
		return (
			<div className="main loading">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}

	return (
		<div className="main">
			<div className="page">
				<div className="nav prev">prev</div>
				<div className="nav next">next</div>
			</div>
			{posted.map((post, index) => (
				<Posts key={post.id} post={post} getPost={getPost(index)} index={index}/>
			))}
			<div className="page">
				<div className="nav prev">prev</div>
				<div className="nav next">next</div>
			</div>
		</div>
	);
};

export default Main;
