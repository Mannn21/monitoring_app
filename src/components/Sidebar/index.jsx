"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/utils/avatar";
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineHistory,
} from "react-icons/ai";
import { BiNotepad, BiEdit } from "react-icons/bi";
import { LiaUserEditSolid } from "react-icons/lia";
import styled from "./index.module.css";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.burgerWrapper}>
					{isOpen ? (
						<div onClick={() => setIsOpen(!isOpen)} className={styled.icon}>
							<AiOutlineClose size={25} />
						</div>
					) : (
						<div onClick={() => setIsOpen(!isOpen)} className={styled.icon}>
							<AiOutlineMenu size={25} />
						</div>
					)}
				</div>
				<div className={styled.profileWrapper}>
					<div className={styled.imageWrapper}>
						<Avatar username="aiman" saturation="90" width="150" height="150" />
					</div>
					<div className={styled.profile}>
						<h3 className={styled.name}>User User</h3>
						<span className={styled.email}>user123@email.com</span>
					</div>
				</div>
				<div className={styled.linkWrapper}>
					<Link className={styled.itemWrapper} href="/dashboard">
						<AiOutlineHome size={22} />
						<span>Home</span>
					</Link>
					<Link className={styled.itemWrapper} href="/dashboard/profile">
						<AiOutlineUser size={22} />
						<span>Profile</span>
					</Link>
					<Link className={styled.itemWrapper} href="/dashboard/history">
						<AiOutlineHistory size={22} />
						<span>History</span>
					</Link>
					<Link className={styled.itemWrapper} href="/dashboard/monthly_report">
						<BiNotepad size={22} />
						<span>Monthly Reports</span>
					</Link>
					<Link className={styled.itemWrapper} href="/dashboard/edit_schedule">
						<BiEdit size={22} />
						<span>Edit Schedule</span>
					</Link>
					<Link className={styled.itemWrapper} href="/dashboard/edit_user">
						<LiaUserEditSolid size={22} />
						<span>Edit Users</span>
					</Link>
				</div>
				<div className={styled.logoutWrapper}>
					<Link className={styled.logout} href="/">Log Out</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
