import styled from "./page.module.css";
import dayjs from "dayjs";
import List from "@/components/List"

const Page = () => {
	const currentDate = dayjs();
	const formattedDate = currentDate.locale("id").format("dddd, D MMMM YYYY");
	return (
		<div className={styled.container}>
			<div className={styled.wrapper}>
				<div className={styled.infoWrapper}>
					<div className={styled.headerWrapper}>
						<div className={styled.titleWrapper}>
							<h1 className={styled.title}>My Schedule Today</h1>
						</div>
						<div className={styled.dateContainer}>
							<span className={styled.date}>{formattedDate}</span>
							<span className={styled.span}>10 Tasks Available Today</span>
						</div>
					</div>
					<div className={styled.listWrapper}>
						<List />
					</div>
				</div>
				<div className={styled.classWrapper}>
					<div className={styled.subClassWrapper}>
						<div className={styled.headerClass}></div>
						<div className={styled.listClass}></div>
					</div>
					<div className={styled.subClassWrapper}></div>
					<div className={styled.subClassWrapper}></div>
				</div>
			</div>
		</div>
	);
};

export default Page;
