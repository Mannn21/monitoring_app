import { ReduxProvider } from "@/redux/provider";
import "./index.global.css";
import { Roboto } from "next/font/google"

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
  })

export const metadata = {
	title: "Molitics Apps",
	description: "Monitoring Apps With Firebase",
	icons: {
		icon: "/icon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={roboto.className}>
			<body suppressHydrationWarning={true}>
				<ReduxProvider>
					<div className="container">
						{children}
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
