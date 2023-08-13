import { Users } from "@/data/users";
import { Avatar } from "./avatar";
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {BsDot} from "react-icons/bs"

const UsersMap = () => {
	return Users?.map(user => {
		return (
			<tr
				className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				key={user.id}>
				<th
					scope="row"
					className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
					<Avatar
						username={user.image}
						saturation={200}
						width={30}
						height={30}
					/>
					<div className="pl-3">
						<div className="text-base font-semibold">{user.name}</div>
						<div className="font-normal text-gray-500">{user.class}</div>
					</div>
				</th>
				<td className="px-6 py-4">{user.address}</td>
				<td className="px-6 py-4">{user.phoneNumber}</td>
				<td className="px-6 py-4">
					{user.status ? (
						<div className="flex items-center">
							<div className="text-green-500 mr-1">
								<BsDot size={30}/>	
							</div>
							<span>Active</span>
						</div>
					) : (
						<div className="flex items-center">
							<div className="text-red-500 mr-1">
								<BsDot size={30}/>
							</div>
							<span>Non Active</span>
						</div>
					)}
				</td>
				<td className="px-6 py-4">
					<a
						href="#"
						className="font-medium text-green-600 dark:text-green-500 hover:underline flex justify-center">
						<AiFillEdit size={20}/>
					</a>
				</td>
				<td className="px-6 py-4">
					<a
						href="#"
						className="font-medium text-red-600 dark:text-red-500 hover:underline flex justify-center">
						<AiFillDelete size={20}/>
					</a>
				</td>
			</tr>
		);
	});
};

export default UsersMap;
