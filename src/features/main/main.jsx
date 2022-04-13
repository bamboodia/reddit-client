import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./mainstyles.css";
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from "../../store/postsSlice";
import Post from "../post/post.jsx";

const Main = () => {
	const reddit = useSelector((state) => state.posts);
	const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
	const posted = useSelector(selectFilteredPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts(selectedSubreddit));		
	}, [selectedSubreddit]);

	return (
		<div className="main">
			{posted.map((post, index) => (
				<Post key={post.id} post={post} rank={index + 1} />
			))}
		</div>		
	);
};

export default Main;