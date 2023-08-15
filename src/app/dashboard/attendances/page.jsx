import dayjs, { locale } from "dayjs";
import AttendancesMap from "@/components/AttendancesTable";
import styled from "./page.module.css";

export default function Page() {
	dayjs.extend(locale);
	const today = dayjs();
	const day = today.format("dddd");
	const formattedDate = today.format("DD MMMM YYYY");

	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h1 className={styled.header}>Attendance Students</h1>
				<span className={styled.day}>{`${day}, ${formattedDate}`}</span>
			</div>
			<div className={styled.tableContainer}>
				<div className={styled.tableWrapper}>
					<table className={styled.table}>
						<thead className={styled.tableHead}>
							<tr>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-lime-400">
									No
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-red-400">
									Name
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-yellow-400">
									Class
								</th>
								<th
									scope="col"
									colSpan="4"
									className="px-6 py-3 text-center bg-green-400">
									Attendance
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-teal-400">
									Grade
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-purple-400">
									Attitude
								</th>
							</tr>
							<tr>
								<th scope="col" className="w-6 px-6 py-3 bg-pink-400">
									Pr
								</th>
								<th scope="col" className="w-6 px-6 py-3 bg-indigo-400">
									Pe
								</th>
								<th scope="col" className="w-6 px-6 py-3 bg-orange-400">
									Si
								</th>
								<th scope="col" className="w-6 px-6 py-3 bg-amber-400">
									Al
								</th>
							</tr>
						</thead>
						<tbody className="overflow-auto">
							<AttendancesMap />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
