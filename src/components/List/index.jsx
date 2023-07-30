import styled from "./index.module.css";
// import TasksMap from "@/utils/taskMapping";
import { Tasks } from "@/utils/tasks";
import React from "react";

const List = () => {
	return (
		<div className={styled.container}>
			{/* <table className={styled.table}>
				<thead className={styled.header}>
					<tr className={styled.tr}>
						<td className={styled.title}>Title</td>
						<td className={styled.member}>Members</td>
						<td className={styled.status}>Status</td>
						<td className={styled.start}>Start Time</td>
						<td className={styled.run}>Run Time</td>
					</tr>
				</thead>
				<tbody className={styled.body}>
					<TasksMap />
					<TasksMap />
				</tbody>
			</table> */}
		</div>
	);
};

export default List;
