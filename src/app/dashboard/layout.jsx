import "../globals.css";
import Sidebar from "../../components/Sidebar";

export const metadata = {
	title: "Dashboard | Monitoring Apps",
	description: "Monitoring Attendance Apps",
};

export default function RootLayout({ children }) {
	return (
		<div className="content-container">
			<Sidebar />
			<div className="content-wrapper">{children}</div>
		</div>
	);
}
