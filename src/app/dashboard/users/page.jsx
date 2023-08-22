import styled from "./page.module.css";
import UsersMap from "@/components/UsersTable";

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
						className={styled.searchInput}
					/>
				</div>
			</div>
			<div className={styled.tableContainer}>
				<div className={styled.tableWrapper}>
					<table className={styled.table}>
						<thead className={styled.tableHead}>
							<tr>
								<th scope="col" className="px-3 py-5 text-center bg-orange-400">
									No
								</th>
								<th scope="col" className="px-6 py-5 bg-indigo-500">
									Name
								</th>
								<th scope="col" className="px-6 py-5 bg-lime-500">
									Gender
								</th>
								<th scope="col" className="px-6 py-5 bg-amber-500">
									Address
								</th>
								<th scope="col" className="px-6 py-5 bg-rose-500">
									Phone Number
								</th>
								<th scope="col" className="px-6 py-5 text-center bg-teal-500">
									Edit
								</th>
								<th scope="col" className="px-6 py-5 text-center bg-purple-500">
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
