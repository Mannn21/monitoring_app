import { Tasks } from "@/utils/tasks";
import styled from "./index.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdDone } from "react-icons/md";

const Table = () => {
	return Tasks.map(task => {
		return (
			<tr key={task.id} className={styled.tr}>
				<td className={styled.title}>{task.title}</td>
				<td className={styled.member}>{task.members}</td>
				<td className={styled.status}>
					{task.status === "Done" ? (
						<MdDone className={styled.done}/>
					) : task.status === "Waiting" ? (
						<AiOutlineClockCircle className={styled.wait}/>
					) : (
						<GiSandsOfTime className={styled.process}/>
					)}

					<span>{task.status}</span>
				</td>
				<td className={styled.start}>{task.start_time}</td>
				<td className={styled.run}>{task.run_time} hours</td>
			</tr>
		);
	});
};

export default Table;
