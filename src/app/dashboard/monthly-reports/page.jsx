import MonthlyTable from "@/components/MonthlyTable";
import { AiOutlineFilePdf } from "react-icons/ai";
import styled from "./page.module.css";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h2 className={styled.header}>Students Monthly Reports</h2>
				<div className={styled.print}>
					<AiOutlineFilePdf size={25} />
					<span>Export</span>
				</div>
			</div>
			<div className={styled.tableContainer}>
				<div className={styled.tableWrapper}>
					<table className={styled.table}>
						<caption className={styled.caption}>
							Teacher: Aimanurrofi
							<p className={styled.yearCaption}>
								Current Academic Year 2023 / 2024
							</p>
						</caption>
						<thead className={styled.tableHead}>
							<tr>
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
									rowSpan="2"
									className="px-6 py-3 text-center bg-green-400">
									Grade
								</th>
								<th
									scope="col"
									colSpan="4"
									className="px-6 py-3 text-center bg-teal-400">
									Attendance
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-purple-400">
									Attitude
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center bg-lime-400">
									Rank
								</th>
							</tr>
							<tr>
								<th className="w-6 px-6 py-3 bg-pink-400">Pr</th>
								<th className="w-6 px-6 py-3 bg-indigo-500">Pe</th>
								<th className="w-6 px-6 py-3 bg-orange-400">Si</th>
								<th className="w-6 px-6 py-3 bg-amber-400">Al</th>
							</tr>
						</thead>
						<tbody>
							<MonthlyTable />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
