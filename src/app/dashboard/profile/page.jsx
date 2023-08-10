import styled from "./page.module.css";
import { Avatar } from "@/utils/avatar";
import {
	AiOutlineCheckCircle,
	AiOutlineCalendar,
	AiOutlineUser,
} from "react-icons/ai";
import {MdOutlineAlternateEmail} from "react-icons/md"

const Page = () => {
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.headerWrapper}>
					<h1 className={styled.header}>My Profile</h1>
				</div>
				<div className={styled.profileWrapper}>
					<div className={styled.imageWrapper}>
						<Avatar username="aiman" saturation="90" width="200" height="200" />
						<button>Change Picture</button>
					</div>
					<div className={styled.profile}>
						<div className={styled.nameWrapper}>
							<h3 className={styled.name}>Aimanurrofi</h3>
							<div className={`${styled.iconWrapper} ${styled.active}`}>
								<AiOutlineCheckCircle />
								<span>Active</span>
							</div>
						</div>
						<div className={styled.statusWrapper}>
							<span className={styled.span}>Age 10 yo</span>
							<div className={`${styled.iconWrapper} ${styled.account}`}>
								<AiOutlineUser />
								<span className={`${styled.span} ${styled.account}`}>student</span>
							</div>
							<span className={styled.span}>GHA D10/12</span>
						</div>
						<div className={`${styled.iconWrapper} ${styled.account}`}>
							<AiOutlineCalendar />
							<span className={`${styled.span} ${styled.account}`}>Joined August 10th</span>
						</div>
						<div className={`${styled.iconWrapper} ${styled.account}`}>
							<MdOutlineAlternateEmail />
							<span className={`${styled.span} ${styled.account}`}>man12345@email.com</span>
						</div>
					</div>
                    <div className={styled.passwordWrapper}>
                        <input type="password" placeholder="****" />
                        <button>Change Password</button>
                    </div>
				</div>
				<div className={styled.classWrapper}>
					<div className={styled.class}>
						<h3 className={styled.classHeader}>Member Of</h3>
						<span className={styled.className}>Class XII MIPA 2</span>
					</div>
				</div>
				<div className={styled.statisticWrapper}>
                    <h4 className={styled.statisticHeader}>Statistic</h4>
                    <div className={styled.statistic}>
                        <div className={styled.card}>
                            <h5 className={styled.cardHeader}>Average Grades</h5>
                            <span className={styled.cardGrade}>4 / 10</span>
                        </div>
                        <div className={styled.card}>
                            <h5 className={styled.cardHeader}>Average Attendance</h5>
                            <span className={styled.cardGrade}>80 / 100</span>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Page;
