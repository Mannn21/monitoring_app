"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/utils/avatar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MapNavigation from "@/utils/mapNavigation";
import styled from "./index.module.css";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.headerWrapper}>
					<div className={styled.burgerWrapper}>
						{isOpen ? (
							<AiOutlineClose onClick={() => handleOpen()} size={24} />
						) : (
							<AiOutlineMenu onClick={() => handleOpen()} size={24} />
						)}
					</div>
					<div className={styled.header}>
						<div className={styled.imageWrapper}>
							<Avatar
								username={"mannnn"}
								saturation={200}
								width={160}
								height={160}
							/>
						</div>
						<div>
							<span>Aimanurrofi</span>
						</div>
					</div>
				</div>
				<div className={styled.navWrapper}>
					<MapNavigation />
				</div>
				<div className={styled.logoutWrapper}>
					<Link className={styled.button} href="/">Logout</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
