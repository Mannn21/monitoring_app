import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {
		isAuth: false,
		username: "",
		email: "",
		uid: null,
		isAdmin: false,
	},
};

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logIn: (state, action) => {
			return {
				value: {
					isAuth: true,
					username: action.payload.username,
					email: action.payload.email,
					uid: action.payload.uid,
					isAdmin: false,
				},
			};
		},
		logOut: () => {
			return initialState;
		},
	},
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
