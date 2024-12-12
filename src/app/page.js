import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ADMIN_ROUTES, ROUTES } from "@/routes/routes";

export default function Home() {
	return (
		<div className={styles.page}>
			<Link href={ROUTES.BLOG}>Блог</Link>
			{ADMIN_ROUTES.map((e) => {
				return (
					<Link key={e.url} href={e.url}>
						{e.title}
					</Link>
				);
			})}
		</div>
	);
}
