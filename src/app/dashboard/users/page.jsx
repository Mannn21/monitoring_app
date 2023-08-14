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
