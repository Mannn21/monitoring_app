import styled from "./page.module.css";
import dayjs from "dayjs";

const Page = () => {
	const currentDate = dayjs();
	const formattedDate = currentDate.locale("id").format("dddd, D MMMM YYYY");
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.infoWrapper}>
					<div className={styled.titleWrapper}>
						<h1 className={styled.title}>My Schedule Today</h1>
						<span className={styled.date}>{formattedDate}</span>
					</div>
					<div className={styled.statisticWrapper}>
						<div className={styled.averageWrapper}>
							<h2 className={styled.averageTitle}>Average Grade</h2>
							<span className={styled.average}>85 / 100</span>
						</div>
						<div className={styled.averageWrapper}>
							<h2 className={styled.averageTitle}>Average Attendance</h2>
							<span className={styled.average}>100 / 100</span>
						</div>
					</div>
				</div>
				<div className={styled.listWrapper}></div>
				<div className={styled.classWrapper}>
					<div className={styled.subClassWrapper}></div>
					<div className={styled.subClassWrapper}></div>
				</div>
			</div>
		</div>
	);
};

export default Page;
