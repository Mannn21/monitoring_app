"use client";
import { useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth, googleProvider } from "./firebase.js";
import { logIn, logOut } from "@/redux/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
	signInWithRedirect,
	getRedirectResult,
} from "firebase/auth";

export default function Home() {
	const dispatch = useDispatch();
	const username = useSelector(state => state.authReducer.value.username);
	const email = useSelector(state => state.authReducer.value.email);

	const handleGoogle = () => {
		signInWithRedirect(auth, googleProvider);
	};

	useEffect(() => {
		getRedirectResult(auth)
			.then(result => {
				if (result) {
					const data = {
						username: result.user.displayName,
						email: result.user.email,
						uid: result.user.auth.currentUser.uid,
					};
					dispatch(logIn(data));
				}
			})
			.catch(error => {
				console.error(error);
			});
	}, [dispatch]);

	return (
		<div>
			<div>
				<div onClick={() => handleGoogle()}>
					<AiOutlineGoogle />
					<span>Login With Google</span>
				</div>
				<div>
					<span>{username} sudah login</span>
					<span>{email} emailnya</span>
				</div>
			</div>
		</div>
	);
}
