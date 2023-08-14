import styled from "./index.module.css";
import { sortedUserByName } from "@/utils/sortedUserName";
import { Users } from "@/data/users.js";

const MonthlyTable = () => {
	const sortedUser = sortedUserByName(Users);
	return sortedUser.map(user => {
		return (
			<tr className={styled.row} key={user.id} align="center">
				<th scope="row" className={styled.tableHead}>
					{user.name}
				</th>
				<td className="px-6 py-4">{user.class}</td>
				<td className="px-6 py-4">{user.grade}</td>
				<td className="px-6 py-4">{user.attendance.present}</td>
				<td className="px-6 py-4">{user.attendance.permission}</td>
				<td className="px-6 py-4">{user.attendance.sick}</td>
				<td className="px-6 py-4">{user.attendance.alpha}</td>
				<td className="px-6 py-4">{user.attitude}</td>
				<td className="px-6 py-4">{user.rank}</td>
			</tr>
		);
	});
};

export default MonthlyTable;
