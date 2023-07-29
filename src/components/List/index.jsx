import styled from "./index.module.css";
// import TasksMap from "@/utils/taskMapping";
import { Tasks } from "@/utils/tasks";
import React from "react";
import { Table } from "antd";
const columns = [
	{
		title: "Title",
		dataIndex: "title",
		width: 250,
	},
	{
		title: "Members",
		dataIndex: "member",
		width: 100,
	},
	{
		title: "Status",
		dataIndex: "status",
		width: 100,
	},
	{
		title: "Start Time",
		dataIndex: "start",
		width: 100,
	},
	{
		title: "Run Time",
		dataIndex: "run",
		width: 100,
	},
];

const data = Tasks.map((task) => ({
	key: task.id,
	title: task.title,
	member: task.members,
	status: task.status,
	start: task.start_time,
	run: task.run_time,
  }));

const List = () => {
	return (
		<div className={styled.container}>
			<Table
				columns={columns}
				dataSource={data}
				scroll={{
					y: 270,
				}}
			/>

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
