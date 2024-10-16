import SidebarDesktop from "./_components/SidebarDesktop";
import SidebarMobile from "./_components/SidebarMobile";

export default function HomePage() {
	return (
		<main>
			<div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<SidebarDesktop />
				<SidebarMobile />
			</div>
		</main>
	);
}
