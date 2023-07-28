"use client";
import { useRouter } from "next/navigation.js";
import Link from "next/link.js";
import { useEffect } from "react";
import { auth, googleProvider, db } from "./firebase.js";
import { logIn } from "@/redux/authSlice.js";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import styled from "./page.module.css";

export default function Home() {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleGoogle = () => {
		signInWithRedirect(auth, googleProvider);
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
					createLogin(
						data.uid,
						data.username,
						data.email,
						data.expToken,
						data.refreshToken
					)
						.then(() => router.push("/dashboard"))
						.catch(error => console.log(error));
				}
			})
			.catch(error => {
				console.error(error);
			});
	}, [dispatch, router]);

	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.headerWrapper}>
					<h1 className={styled.header}>Login</h1>
					<span className={styled.span}>Login to see your dashboard</span>
				</div>
				<div className={styled.inputContainer}>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>Email</label>
						<input
							type="email"
							placeholder="Input your email"
							className={styled.input}
						/>
					</div>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>Password</label>
						<input
							type="password"
							placeholder="*****"
							className={styled.input}
						/>
					</div>
					<div className={styled.submitWrapper}>
						<button className={styled.submit} onClick={() => handleGoogle()}>Submit</button>
					</div>
				</div>
				<div className={styled.submitWrapper}>
					<button className={styled.google}>Sign In With Google</button>
				</div>
				<div className={styled.registerWrapper}>
					<span className={styled.span}>Do Not Have an Account ?</span>
					<button className={styled.register}>
						<Link href="/register" className={styled.link}>Sign Up</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
