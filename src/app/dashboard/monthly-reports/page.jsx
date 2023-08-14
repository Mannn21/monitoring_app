import MonthlyTable from "@/components/MonthlyTable"
import { AiOutlinePrinter } from "react-icons/ai";
import styled from "./page.module.css";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h2 className={styled.header}>Students Monthly Reports</h2>
				<div className={styled.print}>
					<AiOutlinePrinter size={25}/>
                    <span>Print</span>
				</div>
			</div>
			<div>
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
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Class
								</th>
								<th scope="col" className="px-6 py-3">
									Grade
								</th>
								<th scope="col" className="px-6 py-3">
									Attendance
								</th>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Edit</span>
								</th>
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
