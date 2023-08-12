import styled from "./page.module.css";
import { Avatar } from "@/utils/avatar";

export default function Page() {
	return (
		<div className={styled.container}>
			<div>
				<Avatar username={"mannnn"} saturation={200} width={240} height={240} />
                <span>Aimanurrofi</span>
                <span>aiman123@email.com</span>
			</div>
			<div>
                <span>address: GHA A4/11</span>
                <span>Joined since October 2020</span>
                <span>school address: Jakarta Timur</span>
                <span>current academic year: 2023/2024</span>
                <span>Total my students: 20 students</span>
            </div>
			<div></div>
		</div>
	);
}
