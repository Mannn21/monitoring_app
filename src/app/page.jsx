"use client";
import { useState } from "react";
import styled from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Page() {
	const [message, setMessage] = useState("");
	const [idUser, setIdUser] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handlePassword = e => {
		setPassword(e);
	};

	const handleId = e => {
		setIdUser(e);
	};

	const handleAuth = (id, password) => {
		if (id !== "123" && password !== "password123") {
			return setMessage("User Not Found");
		}
		if (id !== "123") {
			return setMessage("User Not Found");
		}
		if (password !== "password123") {
			return setMessage("Password Wrong");
		}
		if (id === "123" && password === "password123") {
			return router.push("/dashboard");
		}
	};

	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.loginBox}>
					<div className={styled.headerWrapper}>
						<h1 className={styled.header}>Sign In</h1>
						{message && <span className={styled.message}>{message}</span>}
					</div>
					<div className={styled.inputWrapper}>
						<div className={styled.inputBox}>
							<label htmlFor="usersId" className={styled.label}>
								Id User
							</label>
							<input
								type="text"
								id="userId"
								placeholder="Input your Id Number"
								className={styled.input}
								onChange={e => handleId(e.target.value)}
							/>
						</div>
						<div className={styled.inputBox}>
							<label htmlFor="password" className={styled.label}>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="********"
								className={styled.input}
								onChange={e => handlePassword(e.target.value)}
							/>
						</div>
					</div>
					<div className={styled.buttonWrapper}>
						<button
							className={styled.button}
							onClick={() => handleAuth(idUser, password)}>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
