"use client";

import { useState } from "react";
import React from "react";
import styled from "./index.module.css";
import Link from "next/link";
import { AiOutlineDown } from "react-icons/ai";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styled.wrapper}>
			<div className={styled.logoWrapper}>
				<h1 className={styled.logo}>Molitics</h1>
			</div>
			<div className={styled.navbarWrapper}>
				<div className={styled.linkWrapper}>
					<Link href="/dashboard" className={styled.link}>Home</Link>
					<Link href="/dashboard/history" className={styled.link}>History</Link>
					<Link href="/dashboard/monthly_report" className={styled.link}>Reports</Link>
					<Link href="/dashboard/profile" className={styled.link}>Profile</Link>
				</div>
				<div
					className={isOpen ? styled.dropdownOpen : styled.dropdownClose}
					onClick={() => setIsOpen(!isOpen)}>
					<div className={styled.dropdownContainer}>
						<span>Edit</span>
						<AiOutlineDown size={22} />
					</div>
					{isOpen && (
						<div className={styled.dropdownCollapse}>
							<Link href="/dashboard/edit_schedule" className={styled.link}>Edit Schedule</Link>
							<Link href="/dashboard/edit_user" className={styled.link}>Edit Users</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
