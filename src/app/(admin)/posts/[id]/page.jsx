async function getPost(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch post");
	}
	return response.json();
}

export default async function PostPage({ params }) {
	const { id } = await params;
	const post = await getPost(id);

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<p>
				<strong>Post ID:</strong> {post.id}
			</p>
		</div>
	);
}
