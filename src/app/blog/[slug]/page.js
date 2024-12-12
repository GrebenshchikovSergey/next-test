"use client";
import { useParams } from "next/navigation";

const BlogPage = () => {
	const params = useParams();
	console.log({ params });
	return <div>blog information:{params.slug}</div>;
};

export default BlogPage;
