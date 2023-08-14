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
								<th scope="col" className="px-6">
									Name
								</th>
								<th scope="col" className="px-6">
									Class
								</th>
								<th scope="col" className="px-6">
									<div className="w-full flex items-center">
										<span>Attendance</span>
									</div>
								</th>
								<th scope="col" className="px-6">
									<div className="w-full flex items-center">
										<span>Grade</span>
									</div>
								</th>
								<th scope="col" className="px-6">
									<div className="w-full flex items-center">
										<span>Attitude</span>
									</div>
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
