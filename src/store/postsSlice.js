import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostInfo } from '../api/reddit';

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
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
      state.searchTerm = '';
    },
    hidePosts(state, action) {
      
    },
    showPost(state, action) {
      state.posts[action.payload].showingPost =
        !state.posts[action.payload].showingPost;
    },
    getPost(state, action) {
      // If we're hiding comment, don't fetch the comments.
      state.posts[action.payload].showingPost =
        !state.posts[action.payload].showingPost;
      if (!state.posts[action.payload].showingPost) {
        return;
      }
      state.posts[action.payload].loadingPost = true;
      state.posts[action.payload].error = false;
    },
    getPostSuccess(state, action) {
      state.posts[action.payload.index].loadingPost = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    getPostFailed(state, action) {
      state.posts[action.payload].loadingPost = false;
      state.posts[action.payload].error = true;
    },
	},
});

export const { getPosts, getPostsSuccess, getPostsFailed, setSelectedSubreddit, getPostFailed,
  getPostSuccess,
  getPost, showPost} = postsSlice.actions;
export default postsSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(getPosts());
    const posts = await getSubredditPosts(subreddit);

    // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
    const postsWithMetadata = posts.map((post) => ({
      ...post,
      showingPost: false,
      comments: [],
      loadingPost: false,
      errorPost: false,
    }));
    dispatch(getPostsSuccess(postsWithMetadata));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};
export const fetchComments = (index, permalink) => async (dispatch) => {
  try {
    dispatch(getPost(index));
    const comments = await getPostInfo(permalink);
    dispatch(getPostSuccess({ index, comments }));
  } catch (error) {
    dispatch(getPostFailed(index));
  }
};

const selectPosts = (state) => state.posts.posts;
const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    
    if (searchTerm !== '') {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }       
    return posts;
  }
);