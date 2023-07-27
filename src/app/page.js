"use client";
import { useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth, googleProvider, db } from "./firebase.js";
import { logIn, logOut } from "@/redux/authSlice.js";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";

export default function Home() {
	const dispatch = useDispatch();
	const username = useSelector(state => state.authReducer.value.username);
	const email = useSelector(state => state.authReducer.value.email);
	const uid = useSelector(state => state.authReducer.value.uid);

	const handleGoogle = () => {
		signInWithRedirect(auth, googleProvider);
	};

	const logout = async uid => {
		await deleteDoc(doc(db, "login", uid))
	}

	const handleLogout = uid => {
		logout(uid)
		signOut(auth)
			.then(() => {
				dispatch(logOut());
			})
			.catch(error => {
				console.log(error);
			});
	};

	const createLogin = async (uid, name, email, exp, refreshToken) => {
		await setDoc(doc(db, "login", uid), {
			name: name,
			email: email,
			uid: uid,
			exp: exp,
			refreshToken: refreshToken,
		});
	};

	useEffect(() => {
		getRedirectResult(auth)
			.then(result => {
				if (result) {
					const data = {
						username: result.user.displayName,
						email: result.user.email,
						uid: result.user.auth.currentUser.uid,
						token: result.user.accessToken,
						refreshToken: result.user.stsTokenManager.refreshToken,
						expToken: result.user.stsTokenManager.expirationTime,
					};
					dispatch(logIn(data));
					createLogin(data.uid,data.username,data.email,data.expToken,data.refreshToken)
						.then(() => console.log("Berhasil"))
						.catch(error => console.log(error));
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
				<div onClick={() => handleLogout(uid)}>
					<span>Logout</span>
				</div>
				<div>
					<span>{username} sudah login</span>
					<span>{email} emailnya</span>
				</div>
			</div>
		</div>
	);
}
