import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: combineReducers({
		posts: postsReducer,
		user: userReducer,
	}),
  });
