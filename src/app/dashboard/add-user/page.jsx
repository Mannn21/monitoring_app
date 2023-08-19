"use client";

import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase";
import Image from "next/image";
import styled from "./page.module.css";

export default function AddUser() {
	const [file, setFile] = useState();
	const [image, setImage] = useState()
	const [data, setData] = useState({
		name: "",
		gender: "",
		userClass: "",
		teacher: "",
		phone: "",
		address: "",
		password: "",
		confPassword: "",
		image: ""
	})

	const handleName = e => {
		setData(prev => ({...prev, name: e}))
	}

	const handleGender = e => {
		setData(prev => ({...prev, gender: e}))
	}

	const handleClass = e => {
		setData(prev => ({...prev, userClass: e}))
	}

	const handleTeacher = e => {
		setData(prev => ({...prev, teacher: e}))
	}

	const handlePhone = e => {
		setData(prev => ({...prev, phone: e}))
	}

	const handleAddress = e => {
		setData(prev => ({...prev, address: e}))
	}

	const handlePassword = e => {
		setData(prev => ({...prev, password: e}))
	}

	const handleConfPassword = e => {
		setData(prev => ({...prev, confPassword: e}))
	}

	const handleImage = e => {
		setImage(e.target.files[0])
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	async function submit() {
		// const selectedFile = e.target.files[0];
		// console.log(selectedFile)
		await fetch("/api/users", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			  },
			body: JSON.stringify(data)
		})
		console.log({data})
		if (image) {
			const storageRef = ref(storage, image.name);
			const uploadTask = uploadBytesResumable(storageRef, image);

			uploadTask.on(
				"state_changed",
				snapshot => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
						default:
							break;
					}
				},
				error => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
						setData(prev => ({...prev, image: downloadURL}))
					});
				}
			);
		}
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
						onChange={e => handleImage(e)}
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
							name="name"
							id="name"
							className={`${styled.input} peer`}
							autoComplete="off"
							placeholder=" "
							onChange={(e) => handleName(e.target.value)}
							required
						/>
						<label
							htmlFor="name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Name
						</label>
					</div>
					<div className={`${styled.inputBox} group`}>
						<label htmlFor="select_gender" className="sr-only">
							Choose Gender
						</label>
						<select
							id="select_gender"
							className={`${styled.select} peer`}
							onChange={e => handleGender(e.target.value)}
							defaultValue="Choose Gender">
							<option disabled>Choose Gender</option>
							<option value="Laki - Laki">Laki - Laki</option>
							<option value="Perempuan">Perempuan</option>
						</select>
					</div>
				</div>
				<div className={styled.inputWrapper}>
					<div className={`${styled.inputBox} group`}>
						<input
							type="tel"
							// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							name="phone"
							id="phone"
							className={`${styled.input} peer`}
							placeholder=" "
							autoComplete="off"
							onChange={e => handlePhone(e.target.value)}
							required
						/>
						<label
							htmlFor="phone"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Phone number
						</label>
					</div>
					<div className={styled.inputBox}>
						<input
							type="text"
							name="address"
							id="address"
							className={`${styled.input} peer`}
							autoComplete="off"
							onChange={e => handleAddress(e.target.value)}
							placeholder=" "
							required
						/>
						<label
							htmlFor="address"
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
							onChange={e => handleClass(e.target.value)}
							defaultValue="Choose Class">
							<option disabled>Choose Class</option>
							<option value="Pagi 1">Pagi 1</option>
							<option value="Pagi 2">Pagi 2</option>
							<option value="Siang 1">Siang 1</option>
							<option value="Siang 2">Siang 2</option>
						</select>
					</div>
					<div className={`${styled.inputBox} group`}>
						<label htmlFor="select_teacher" className="sr-only">
							Choose Teacher
						</label>
						<select
							id="select_teacher"
							className={`${styled.select} peer`}
							onChange={e => handleTeacher(e.target.value)}
							defaultValue="Choose Teacher">
							<option disabled>Choose Teacher</option>
							<option value="Aimanurrofi">Aimanurrofi</option>
							<option value="Doyok Nana">Doyok Nana</option>
							<option value="Ujang Lima">Ujang Lima</option>
							<option value="Sri Nurwati">Sri Nurwati</option>
						</select>
					</div>
				</div>
				<div className="w-full grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="password"
							id="password"
							className={`${styled.input} peer`}
							placeholder=" "
							autoComplete="off"
							onChange={e => handlePassword(e.target.value)}
							required
						/>
						<label
							htmlFor="password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Password
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="confPassword"
							id="confPassword"
							className={`${styled.input} peer`}
							placeholder=" "
							autoComplete="off"
							onChange={e => handleConfPassword(e.target.value)}
							required
						/>
						<label
							htmlFor="confPassword"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Confirm password
						</label>
					</div>
				</div>
				<button type="submit" className={styled.button} onClick={() => submit()}>
					Submit
				</button>
			</form>
		</div>
	);
}
