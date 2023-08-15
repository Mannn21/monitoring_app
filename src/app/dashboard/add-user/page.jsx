import styld from "./page.module.css";

export default function AddUser() {
	return (
		<div>
			<div>
				<h2>Add Student</h2>
			</div>
			<div>
				<div>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						for="user_avatar">
						Upload file
					</label>
					<input
						className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						aria-describedby="user_avatar_help"
						id="user_avatar"
						type="file"
					/>
					<div
						className="mt-1 text-sm text-gray-500 dark:text-gray-300"
						id="user_avatar_help">
						A profile picture is useful to confirm your are logged into your
						account
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="floating_first_name"
							id="floating_first_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_first_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							First name
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="floating_last_name"
							id="floating_last_name"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_last_name"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Last name
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="tel"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							name="floating_phone"
							id="floating_phone"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_phone"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Phone number
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="text"
							name="floating_company"
							id="floating_company"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_company"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Address
						</label>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<label for="underline_select" className="sr-only">
							Choose Class
						</label>
						<select
							id="underline_select"
							className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
							<option selected>Choose Class</option>
							<option value="US">Pagi 1</option>
							<option value="CA">Pagi 2</option>
							<option value="FR">Siang 1</option>
							<option value="DE">Siang 2</option>
						</select>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<label for="underline_select" className="sr-only">
							Choose Teacher
						</label>
						<select
							id="underline_select"
							className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
							<option selected>Choose Teacher</option>
							<option value="US">Aimanurrofi</option>
							<option value="CA">Doyok Nana</option>
							<option value="FR">Ujang Lima</option>
							<option value="DE">Sri Nurwati</option>
						</select>
					</div>
				</div>
				<div className="grid md:grid-cols-2 md:gap-6">
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="floating_password"
							id="floating_password"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Password
						</label>
					</div>
					<div className="relative z-0 w-full mb-6 group">
						<input
							type="password"
							name="repeat_password"
							id="floating_repeat_password"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_repeat_password"
							className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Confirm password
						</label>
					</div>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Submit
				</button>
			</div>
		</div>
	);
}
