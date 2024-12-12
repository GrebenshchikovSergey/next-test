import BlogList from "./BlogList";

const page = () => {
	const blogs = [
		{ id: 1, title: "blog1", description: "blog1description" },
		{ id: 2, title: "blog2", description: "blog2description" },
		{ id: 3, title: "blog2", description: "blog3description" },
		{ id: 4, title: "blog2", description: "blog4description" },
	];
	return (
		<div>
			<BlogList list={blogs} />
		</div>
	);
};

export default page;
