"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "./page.module.css";

export default function AddUser() {
	const [file, setFile] = useState();
	function handleChange(e) {
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h2 className={styled.header}>Add Student</h2>
			</div>
			<form className={styled.form}>
				<div className={styled.imageWrapper}>
					<div className={styled.image}>
						{!file ? (
							<svg
								className={styled.svg}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"></path>
							</svg>
						) : (
							<Image
								src={!file ? "" : file}
								fill
								sizes="auto"
								alt="imageProfile"
							/>
						)}
					</div>
					<label className={styled.imageLabel} htmlFor="user_avatar">
						Upload Image
					</label>
					<input
						className={styled.inputImage}
						aria-describedby="user_avatar_help"
						id="user_avatar"
						type="file"
						onChange={e => handleChange(e)}
					/>
					<div className={styled.textImage} id="user_avatar_help">
						A profile picture is useful to confirm your are logged into your
						account
					</div>
				</div>
				<div className={styled.inputWrapper}>
					<div className={`${styled.inputBox} group`}>
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_first_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							First name
						</label>
					</div>
					<div className={styled.inputBox}>
						<input
							type="text"
							name="floating_last_name"
							id="floating_last_name"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_last_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Last name
						</label>
					</div>
				</div>
				<div className={styled.inputWrapper}>
					<div className={`${styled.inputBox} group`}>
						<input
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							name="floating_phone"
							id="floating_phone"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_phone"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Phone number
						</label>
					</div>
					<div className={styled.inputBox}>
						<input
							type="text"
							name="floating_company"
							id="floating_company"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_company"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Address
						</label>
					</div>
				</div>
				<div className={styled.inputWrapper}>
					<div className={`${styled.inputBox} group`}>
						<label htmlFor="select_class" className="sr-only">
							Choose Class
						</label>
						<select
							id="select_class"
							className={`${styled.select} peer`}
							defaultValue="Choose Class">
							<option disabled>Choose Class</option>
							<option value="US">Pagi 1</option>
							<option value="CA">Pagi 2</option>
							<option value="FR">Siang 1</option>
							<option value="DE">Siang 2</option>
						</select>
					</div>
					<div className={`${styled.inputBox} group`}>
						<label htmlFor="select_teacher" className="sr-only">
							Choose Teacher
						</label>
						<select
							id="select_teacher"
							className={`${styled.select} peer`}
							defaultValue="Choose Teacher">
							<option disabled>Choose Teacher</option>
							<option value="US">Aimanurrofi</option>
							<option value="CA">Doyok Nana</option>
							<option value="FR">Ujang Lima</option>
							<option value="DE">Sri Nurwati</option>
						</select>
					</div>
				</div>
				<div className="w-full grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="floating_password"
							id="floating_password"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Password
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="repeat_password"
							id="floating_repeat_password"
							className={`${styled.input} peer`}
							placeholder=" "
							required
						/>
						<label
							htmlFor="floating_repeat_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Confirm password
						</label>
					</div>
				</div>
				<button type="submit" className={styled.button}>
					Submit
				</button>
			</form>
		</div>
	);
}
