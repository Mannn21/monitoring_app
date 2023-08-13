import { Users } from "@/data/users";
import "@/app/globals.css";

const AttendancesMap = () => {
	return Users?.map(user => {
		return (
			<tr
				className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				key={user.id}>
				<th
					scope="row"
					className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
					{user.name}
				</th>
				<td className="px-6 py-4">{user.class}</td>
				<td className="w-10 p-4">
					<div className="flex items-center justify-center">
						<input
							id="checkbox-table-1"
							type="checkbox"
							className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label for="checkbox-table-1" className="sr-only">
							Attendance
						</label>
					</div>
				</td>
				<td className="w-10 p-4">
					<div className="flex items-center justify-center">
						<input
							id="small-input"
							type="text"
							maxLength="3"
							class="w-12 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
						/>
						<label for="checkbox-table-1" className="sr-only">
							Grade
						</label>
					</div>
				</td>
				<td className="w-10 p-4 ">
					<div className="flex items-center justify-center">
						<input
							type="text"
							id="small-input"
							maxLength="1"
							class="block w-10 h-10 p-2 uppercase text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
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
