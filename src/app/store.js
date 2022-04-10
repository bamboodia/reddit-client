import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {articleSlice} from '../features/articles/articleSlice.js';

export const store = configureStore({
	reducer: combineReducers({
	  article: articleSlice,	  
	}),
  });
