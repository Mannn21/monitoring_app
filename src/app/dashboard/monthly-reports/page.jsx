import MonthlyTable from "@/components/MonthlyTable";
import { AiOutlinePrinter } from "react-icons/ai";
import styled from "./page.module.css";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h2 className={styled.header}>Students Monthly Reports</h2>
				<div className={styled.print}>
					<AiOutlinePrinter size={25} />
					<span>Print</span>
				</div>
			</div>
			<div className={styled.tableContainer}>
				<div className={styled.tableWrapper}>
					<table className={styled.table} border="1">
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
									className="px-6 py-3 text-center">
									Name
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center">
									Class
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center">
									Grade
								</th>
								<th
									scope="col"
									colSpan="4"
									className="px-6 py-3 text-center">
									Attendance
								</th>
								<th
									scope="col"
									rowSpan="2"
									className="px-6 py-3 text-center">
									Attitude
								</th>
							</tr>
						</thead>
						<thead className={styled.tableHead2}>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th className="w-6 px-6 py-3">Pr</th>
								<th className="w-6 px-6 py-3">Pe</th>
								<th className="w-6 px-6 py-3">Si</th>
								<th className="w-6 px-6 py-3">Al</th>
								<th></th>
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
