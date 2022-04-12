import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
//import subRedditsReducer from './subRedditsSlice';

export const store = configureStore({
	reducer: combineReducers({
		posts: postsReducer,
		//subreddits: subRedditsReducer,
	}),
  });
