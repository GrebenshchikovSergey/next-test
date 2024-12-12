import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ list }) => {
	return (
		<div>
			{list?.length > 0 &&
				list.map((blog) => {
					return <BlogItem item={blog} key={blog.id} />;
				})}
		</div>
	);
};

export default BlogList;
