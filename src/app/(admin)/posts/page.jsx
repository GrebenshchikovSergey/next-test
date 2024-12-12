import PostList from "./PostList";

async function getPosts() {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	if (!response.ok) {
		throw new Error("Failed to fetch post");
	}
	return response.json();
}
export default async function PostsPage() {
	const posts = await getPosts();

	return (
		<div>
			<PostList list={posts} />
		</div>
	);
}
