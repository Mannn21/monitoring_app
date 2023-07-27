import "bootstrap/dist/css/bootstrap.min.css";
import { ReduxProvider } from "@/redux/provider";
import SSRProvider from "react-bootstrap/SSRProvider";

export const metadata = {
	title: "Molitics Apps",
	description: "Monitoring Apps With Firebase",
	icons: {
		icon: "/icon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
