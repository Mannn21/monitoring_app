import dayjs, {locale} from "dayjs";
import AttendancesMap from "@/utils/attendancesMap";
import styled from "./page.module.css";

export default function Page() {
    dayjs.extend(locale)
    const today = dayjs()
    const day = today.format('dddd')
    const formattedDate = today.format("DD MMMM YYYY")

	return (
		<div className={styled.container}>
			<div className={styled.headerWrapper}>
				<h1 className={styled.header}>Attendance Students</h1>
                <span className={styled.day}>{`${day}, ${formattedDate}`}</span>
			</div>
			<div className={styled.table}>
				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3">
									Name
								</th>
								<th scope="col" class="px-6 py-3">
									Class
								</th>
								<th scope="col" class="px-6">
									<div class="w-full flex items-center">
										<span>Attendance</span>
									</div>
								</th>
								<th scope="col" class="px-6">
									<div class="w-full flex items-center">
										<span>Grade</span>
									</div>
								</th>
								<th scope="col" class="px-6">
									<div class="w-full flex items-center">
										<span>Attitude</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody className="overflow-auto">
							<AttendancesMap />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
