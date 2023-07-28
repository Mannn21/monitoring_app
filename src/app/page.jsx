"use client";
import { useEffect } from "react";
import { Button, Input, Form } from "antd";
import {
	GoogleOutlined,
	EyeTwoTone,
	EyeInvisibleOutlined,
} from "@ant-design/icons";
import { auth, googleProvider, db } from "./firebase.js";
import { logIn, logOut } from "@/redux/authSlice.js";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { Container, Wrapper } from "../styles/index.global.js";

export default function Home() {
	const dispatch = useDispatch();
	const username = useSelector(state => state.authReducer.value.username);
	const email = useSelector(state => state.authReducer.value.email);
	const uid = useSelector(state => state.authReducer.value.uid);

	const handleGoogle = () => {
		signInWithRedirect(auth, googleProvider);
	};

	const logout = async uid => {
		await deleteDoc(doc(db, "login", uid));
	};

	const handleLogout = uid => {
		logout(uid);
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
					createLogin(
						data.uid,
						data.username,
						data.email,
						data.expToken,
						data.refreshToken
					)
						.then(() => console.log("Berhasil"))
						.catch(error => console.log(error));
				}
			})
			.catch(error => {
				console.error(error);
			});
	}, [dispatch]);

	return (
		<Container>
			<Wrapper>
				<div>
					<Form
						name="basic"
						labelCol={{
							span: 8,
						}}
						wrapperCol={{
							span: 16,
						}}
						style={{
							maxWidth: 600,
						}}
						initialValues={{
							remember: true,
						}}
						autoComplete="off">
						<h1>Login Page</h1>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
							]}>
							<Input.Password
								placeholder="input password"
								iconRender={visible =>
									visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
								}
							/>
						</Form.Item>
						<Form.Item
							wrapperCol={{
								offset: 8,
								span: 16,
							}}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
					<div onClick={() => handleGoogle()}>
						<span>Or</span>
						<Button type="primary" icon={<GoogleOutlined />}>
							Login With Google
						</Button>
					</div>
				</div>
			</Wrapper>
		</Container>
	);
}
