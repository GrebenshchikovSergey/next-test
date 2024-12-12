import React from "react";
import PostItem from "./PostItem";

const PostList = ({ list }) => {
	return (
		<div>
			{list?.length > 0 &&
				list.map((item) => {
					return <PostItem item={item} key={item.id} />;
				})}
		</div>
	);
};

export default PostList;
