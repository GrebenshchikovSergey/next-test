import Link from "next/link";
import React from "react";
import { ROUTES } from "@/routes/routes";

const BlogItem = ({ item }) => {
	return (
		<Link href={`${ROUTES.BLOG}/${item.title}`}>
			<p>{item.title}</p>
			<p>{item.desription}</p>
		</Link>
	);
};

export default BlogItem;
