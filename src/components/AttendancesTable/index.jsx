import { Users } from "@/data/users";
import styled from "./index.module.css"

const AttendancesMap = () => {
	return Users?.map(user => {
		return (
			<tr
				className={styled.row}
				key={user.id}>
				<th
					scope="row"
					className="">
					{user.name}
				</th>
				<td className={styled.class}>{user.class}</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="checkbox-table-1"
							type="checkbox"
							className={styled.checkbox}
						/>
						<label for="checkbox-table-1" className="sr-only">
							Attendance
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="small-input"
							type="text"
							maxLength="3"
							className={styled.numberInput}
						/>
						<label for="checkbox-table-1" className="sr-only">
							Grade
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							type="text"
							id="small-input"
							maxLength="1"
							className={styled.input}
						/>
						<label for="checkbox-table-1" className="sr-only">
							Attitude
						</label>
					</div>
				</td>
			</tr>
		);
	});
};

export default AttendancesMap;
