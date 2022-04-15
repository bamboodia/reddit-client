import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: false,
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
        setMode(state) {
            state.darkMode = !state.darkMode
        }
    },
});

export const {setMode} = optionsSlice.actions

export default optionsSlice.reducer;
