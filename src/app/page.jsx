import styled from "./page.module.css";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.loginBox}>
					<div className={styled.headerWrapper}>Sign In</div>
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
							/>
						</div>
						<div className={styled.inputBox}>
							<label htmlFor="password" className={styled.label}>
								Password
							</label>
							<input type="password" id="password" placeholder="********" className={styled.input} />
						</div>
					</div>
					<div className={styled.buttonWrapper}>
						<button className={styled.button}>Sign In</button>
					</div>
				</div>
			</div>
		</div>
	);
}
