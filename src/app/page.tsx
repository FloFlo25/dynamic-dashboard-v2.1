"use client";

import { redirect } from "next/navigation";
import { isUserLoggedIn } from "~/lib/utils";

export default function HomePage() {
	if (!isUserLoggedIn()) redirect("/login");

	return <main>Main content</main>;
}
