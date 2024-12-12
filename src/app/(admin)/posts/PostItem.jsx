import Link from "next/link";
import React from "react";

const PostItem = ({ item }) => {
	return (
		<Link
			href={`posts/${item.id}`}
			style={{ display: "block", margin: "20px", border: "1px solid black" }}
		>
			<p>{item.title}</p>
			<p>{item.description}</p>
		</Link>
	);
};

export default PostItem;
