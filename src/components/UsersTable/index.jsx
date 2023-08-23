"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
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
	}, [users]);

	const MySwal = withReactContent(Swal);

	const handleDelete = async (studentId, name) => {
		MySwal.mixin({
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger",
			},
			buttonsStyling: false,
		});

		MySwal.fire({
			title: "Are you sure?",
			text: `You want to delete ${name}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "No, cancel!",
			reverseButtons: true,
		}).then(async result => {
			if (result.isConfirmed) {
				let swalLoading = MySwal.fire({
					title: "Deleting...",
					showConfirmButton: false,
					showCancelButton: false,
					allowOutsideClick: false,
					willOpen: () => {
						Swal.showLoading();
					},
				});

				try {
					const response = await fetch(`/api/users/${studentId}`, {
						method: "DELETE"
					});
					console.log(response)
					swalLoading.close();

					if (response.status === 200) {
						MySwal.fire("Deleted!", "Student has been deleted.", "success");
					} else {
						MySwal.fire("Sorry", "Student failed to be deleted.", "error");
					}
				} catch (error) {
					MySwal.fire("Error", "An error occurred.", "error");
				}
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				MySwal.fire("Cancelled", "Your student is safe :)", "error");
			}
		});
	};

	return users?.map((user, index) => {
		return (
			<tr className={styled.row} key={user.id}>
				<th className="px-3 py-4 text-center">{index + 1}</th>
				<th scope="row" className={styled.head}>
					<Image
						src={user.imageURL}
						height={30}
						width={30}
						alt={user.name}
						className="rounded-full w-8 h-8 overflow-hidden"
					/>
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
				<td className="px-6 py-4 flex justify-center items-center">
					<button
						className={styled.delete}
						onClick={() => handleDelete(user.studentId, user.name)}>
						<AiFillDelete size={20} />
					</button>
				</td>
			</tr>
		);
	});
};

export default UsersMap;
