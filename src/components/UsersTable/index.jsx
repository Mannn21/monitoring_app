"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Users } from "@/data/users";
import { Avatar } from "@/utils/avatar";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {BiFemaleSign, BiMaleSign} from "react-icons/bi"
import styled from "./index.module.css";

const UsersMap = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getDatas = async () => {
			const response = await fetch(`/api/users/`);
			const datas = await response.json();
			setUsers(datas.data);
		};
		getDatas();
	}, []);
	return users?.map((user, index) => {
		return (
			<tr className={styled.row} key={user.id}>
				<th className="px-3 py-4 text-center">{index + 1}</th>
				<th scope="row" className={styled.head}>
					<Image src={user.imageURL} height={30} width={30} alt={user.name} className="rounded-full w-8 h-8 overflow-hidden"/>
					<div className="pl-3">
						<div className="text-base font-semibold">{user.name}</div>
						<div className="font-normal text-gray-500">
							{user.class.studentClass}
						</div>
					</div>
				</th>
				<td className="px-6 py-4">
					{user.gender === "Perempuan" ? (
						<div className="flex items-center">
							<div className="text-pink-500 mr-1">
								<BiFemaleSign size={25} />
							</div>
							<span>{user.gender}</span>
						</div>
					) : (
						<div className="flex items-center">
							<div className="text-blue-500 mr-1">
								<BiMaleSign size={25} />
							</div>
							<span>{user.gender}</span>
						</div>
					)}
				</td>
				<td className="px-6 py-4">{user.address}</td>
				<td className="px-6 py-4">{user.phoneNumber}</td>
				<td className="px-6 py-4">
					<a href="#" className={styled.edit}>
						<AiFillEdit size={20} />
					</a>
				</td>
				<td className="px-6 py-4">
					<a href="#" className={styled.delete}>
						<AiFillDelete size={20} />
					</a>
				</td>
			</tr>
		);
	});
};

export default UsersMap;
