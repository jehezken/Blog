import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import Link from "next/link";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
	const posts = await reader.collections.posts.all();

	return (
		<ul className="p-32 flex flex-col gap-4">
			{posts.map((post) => (
				<li
					key={post.slug}
					className="list-disc">
					<Link href={`/posts/${post.slug}`}>{post.entry.title}</Link>
				</li>
			))}
		</ul>
	);
}
