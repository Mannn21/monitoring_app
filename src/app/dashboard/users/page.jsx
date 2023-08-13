import styled from "./page.module.css";
import UsersMap from "@/utils/usersMap";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h1 className={styled.header}>List Of My Students</h1>
				<div className={styled.search}>
					<input
						type="text"
						id="small-input"
                        placeholder="Search Users...."
						className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>
			</div>
			<div className={styled.table}>
				<div className="relative overflow-x-auto overflow-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Address
								</th>
								<th scope="col" className="px-6 py-3">
									Phone Number
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Edit
								</th>
								<th scope="col" className="px-6 py-3 text-center">
									Delete
								</th>
							</tr>
						</thead>
						<tbody>
							<UsersMap />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
