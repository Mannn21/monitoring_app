"use client";

import Link from "next/link";
import styled from "./page.module.css";
import { AiOutlineGoogle } from "react-icons/ai";

const Page = () => {
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.headerWrapper}>
					<h1 className={styled.header}>Register</h1>
					<span className={styled.span}>Register to create your account</span>
				</div>
				<div className={styled.inputContainer}>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>
							Username
						</label>
						<input
							type="text"
							placeholder="Input your username"
							className={styled.input}
						/>
					</div>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>
							Email
						</label>
						<input
							type="email"
							placeholder="Input your email"
							className={styled.input}
						/>
					</div>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>
							Password
						</label>
						<input
							type="password"
							placeholder="*****"
							className={styled.input}
						/>
					</div>
					<div className={styled.inputWrapper}>
						<label htmlFor="" className={styled.label}>
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="*****"
							className={styled.input}
						/>
					</div>
					<div className={styled.submitWrapper}>
						<button className={styled.submit}>Submit</button>
					</div>
				</div>
				<div className={styled.submitWrapper}>
					<button className={styled.google}>
						<AiOutlineGoogle size={25} /> Sign Up With Google
					</button>
				</div>
				<div className={styled.registerWrapper}>
					<span className={styled.span}>Have an Account ?</span>
					<Link href="/" className={styled.login}>
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
