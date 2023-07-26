import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { wrapper } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Molitics Apps",
	description: "Monitoring Apps With Firebase",
	icons: {
		icon: "/icon.ico",
	},
};

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}

export default wrapper.withRedux(RootLayout);
