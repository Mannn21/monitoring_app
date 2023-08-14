import styled from "./index.module.css";
import {Users} from "@/data/users.js";

const MonthlyTable = () => {
	return Users?.map(user => {
		return (
			<tr class={styled.row} key={user.id}>
				<th scope="row" class={styled.tableHead}>
					{user.name}
				</th>
				<td class="px-6 py-4">{user.grade}</td>
				<td class="px-6 py-4">
					<span>{user.attendance.present}</span>
					<span>{user.attendance.permission}</span>
					<span>{user.attendance.sick}</span>
					<span>{user.attendance.alpha}</span>
				</td>
				<td class="px-6 py-4">{user.attitude}</td>
				<td class="px-6 py-4 text-right">
					{user.id}
				</td>
			</tr>
		);
	});
};

export default MonthlyTable;
