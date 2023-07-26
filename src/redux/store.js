import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: [authSlice.reducer],
		},
		devTools: true,
	});

export const AppStore = makeStore().getState;
export const AppState = makeStore().getState();
export const AppThunk = ThunkAction;
export const wrapper = createWrapper(makeStore);
