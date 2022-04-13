import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	accessCode: "",
	userState: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAccessToken(state, action) {
			state.accessCode = action.payload;
		},
		setUserState(state, action) {
			state.userState = action.payload;
		},

	},
});

export const { setAccessToken, setUserState } = userSlice.actions;
export default userSlice.reducer;
