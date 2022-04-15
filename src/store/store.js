import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
import subredditsReducer from './subredditsSlice';
import optionsReducer from './optionsSlice'

export const store = configureStore({
	reducer: combineReducers({
		posts: postsReducer,
		subreddits: subredditsReducer,
		options: optionsReducer
	}),
  });
