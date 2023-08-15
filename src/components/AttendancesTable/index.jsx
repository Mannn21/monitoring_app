import { Users } from "@/data/users";
import styled from "./index.module.css";

const AttendancesMap = () => {
	return Users?.map(user => {
		return (
			<tr className={styled.row} key={user.id}>
				<th scope="row" className={styled.id}>
					{user.id}
				</th>
				<th scope="row" className={styled.name}>
					{user.name}
				</th>
				<td className={styled.class}>{user.class}</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="present"
							type="radio"
							name={`${user.id} attendance`}
							value="present"
							className={styled.checkbox}
						/>
						<label htmlFor="present" className="sr-only">
							Present
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="permission"
							type="radio"
							name={`${user.id} attendance`}
							value="permission"
							className={styled.checkbox}
						/>
						<label htmlFor="permission" className="sr-only">
							Permission
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="sick"
							type="radio"
							name={`${user.id} attendance`}
							value="sick"
							className={styled.checkbox}
						/>
						<label htmlFor="sick" className="sr-only">
							Sick
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="alpha"
							type="radio"
							name={`${user.id} attendance`}
							value="alpha"
							className={styled.checkbox}
						/>
						<label htmlFor="alpha" className="sr-only">
							Alpha
						</label>
					</div>
				</td>
				<td className={styled.data}>
					<div className={styled.inputWrapper}>
						<input
							id="small-input"
							type="text"
							maxLength="3"
							autoComplete="off"
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
							autoComplete="off"
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
