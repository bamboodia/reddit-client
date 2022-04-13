import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
	posts: [],
	error: false,
	isLoading: false,
	searchTerm: "",
	selectedSubreddit: "/r/popular/",
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		getPosts(state, action) {
			state.isLoading = true;
			state.error = false;
		},
		getPostsSuccess(state, action) {
			state.isLoading = false;
			state.error = false;
			state.posts = action.payload;
		},
		getPostsFailed(state, action) {
			state.isLoading = false;
			state.error = true;
		},
	},
});

export const { getPosts, getPostsSuccess, getPostsFailed } = postsSlice.actions;
export default postsSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(getPosts());
    const posts = await getSubredditPosts(subreddit);

    // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
    const postsWithMetadata = posts.map((post) => ({
      ...post,
      showingComments: false,
      comments: [],
      loadingComments: false,
      errorComments: false,
    }));
    dispatch(getPostsSuccess(postsWithMetadata));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};

const selectPosts = (state) => state.posts.posts;
const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    
    if (searchTerm !== '') {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(posts)    
    return posts;
  }
);