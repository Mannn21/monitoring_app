import Sidebar from "@/components/Sidebar";
import styled from "./layout.module.css"

export const metadata = {
	title: "Molitics Apps | Dashboard",
	description: "Monitoring Apps With Firebase",
	icons: {
		icon: "/icon.ico",
	},
};

export default function DashboardLayout({ children }) {
	return (
		<div className={styled.container}>
			<Sidebar />
			<div className={styled.content}>{children}</div>
		</div>
	);
}
