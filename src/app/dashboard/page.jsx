import styled from "./page.module.css";
import { Avatar } from "@/utils/avatar";
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { BiSolidUser, BiSolidChalkboard } from "react-icons/bi";
import { MdOutlineAlternateEmail, MdGroup } from "react-icons/md";
import { AiFillIdcard, AiFillHome } from "react-icons/ai";

export default function Page() {
	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h1 className={styled.header}>PROFILE PAGE</h1>
			</div>
			<div className={styled.profileWrapper}>
				<div className={`${styled.section} ${styled.details}`}>
					<h2 className={styled.headerSection}>School Details</h2>
					<div className={styled.detailWrapper}>
						<div>
							<div className={styled.iconWrapper}>
								<FaSchool size={22} />
								<h3>School Address</h3>
							</div>
							<span className={styled.span}>
								Jalan Minggu Pagi No. 123, Pondok Banyu, Jakarta Timur, DKI
								Jakarta
							</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<BiSolidChalkboard size={22} />
								<h3>Class Name</h3>
							</div>
							<span className={styled.span}>Pagi 1</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<BiSolidUser size={22} />
								<h3>Total my students</h3>
							</div>
							<span className={styled.span}>20 students</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<IoIosSchool size={22} />
								<h3>Current academic year</h3>
							</div>
							<span className={styled.span}>2023/2024</span>
						</div>
					</div>
				</div>
				<div className={`${styled.section} ${styled.imageWrapper}`}>
					<div className={styled.image}>
						<Avatar
							username={"mannnn"}
							saturation={200}
							width={240}
							height={240}
						/>
					</div>
					<div>
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							htmlFor="user_avatar">
							Change Picture
						</label>
						<input
							className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
							aria-describedby="user_avatar_help"
							id="user_avatar"
							type="file"
						/>
						<div
							className="mt-1 text-sm text-gray-500 dark:text-gray-300"
							id="user_avatar_help">
							Change your profile picture for update account
						</div>
						<button className={styled.button}>Submit</button>
					</div>
				</div>
				<div className={`${styled.section} ${styled.details}`}>
					<h2 className={styled.headerSection}>My Details</h2>
					<div className={styled.detailWrapper}>
						<div>
							<div className={styled.iconWrapper}>
								<AiFillIdcard size={22} />
								<h3>Name</h3>
							</div>
							<span className={styled.span}>Aimanurrofi</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<MdOutlineAlternateEmail size={22} />
								<h3>Email</h3>
							</div>
							<span className={styled.span}>aiman123@email.com</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<AiFillHome size={22} />
								<h3>Home Address</h3>
							</div>
							<span className={styled.span}>GHA A4/11</span>
						</div>
						<div>
							<div className={styled.iconWrapper}>
								<MdGroup size={22} />
								<h3>Joined</h3>
							</div>
							<span className={styled.span}>Joined since October 2020</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
