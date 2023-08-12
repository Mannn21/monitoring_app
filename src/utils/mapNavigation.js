import Link from "next/link";
import { Navigation } from "@/data/navigation";
import "@/app/globals.css"

const MapNavigation = () => {
	return Navigation?.map(item => {
		return (
			<Link href={item.location} k key={item.id} className="nav">
				<div className="navIcon">{item.icon}</div>
				<div className="navTitle">
					<span>{item.title}</span>
				</div>
			</Link>
		);
	});
};

export default MapNavigation;
