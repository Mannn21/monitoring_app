import StyledComponentsRegistry from "@/lib/antRegistry";
import { ReduxProvider } from "@/redux/provider";

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
				<ReduxProvider>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</ReduxProvider>
			</body>
		</html>
	);
}
