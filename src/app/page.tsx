import SidebarDesktop from "./_components/SidebarDesktop";
import SidebarMobile from "./_components/SidebarMobile";

export default function HomePage() {
	return (
		<main>
			<div className="flex min-h-screen  bg-secondary-main">
				<SidebarDesktop />
				<SidebarMobile />
				<div className="w-full">Home page</div>
			</div>
		</main>
	);
}
