import { Tasks } from "./tasks";
import styled from "./index.module.css"

const TasksMap = () => {
	return Tasks.map(task => {
		return (
			<tr key={task.id} className={styled.tr}>
				<td className={styled.title}>{task.title}</td>
				<td className={styled.member}>{task.members}</td>
				<td className={styled.status}>{task.status}</td>
				<td className={styled.start}>{task.start_time}</td>
				<td className={styled.run}>{task.run_time} hours</td>
			</tr>
		);
	});
};

export default TasksMap