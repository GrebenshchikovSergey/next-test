import Link from "next/link";
import { ADMIN_ROUTES } from "@/routes/routes";

export default function AdminLayout({ children }) {
	return (
		<div>
			<header>
				<h1>Админ-панель</h1>
				<nav>
					{ADMIN_ROUTES.map((route) => (
						<Link href={route.url} key={route.url}>
							{route.title}
						</Link>
					))}
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
}
