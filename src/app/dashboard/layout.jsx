import Navbar from "@/components/Navbar";

export const metadata = {
	title: "Molitics Apps | Dashboard",
	description: "Monitoring Apps With Firebase",
	icons: {
		icon: "/icon.ico",
	},
};

export default function DashboardLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
