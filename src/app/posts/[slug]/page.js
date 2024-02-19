import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page({ params }) {
	const { slug } = params;
	const post = await reader.collections.posts.read(slug);
	return (
		<>
			<Link
				href="/"
				className="absolute top-5 left-5 flex items-center gap-3">
				<MoveLeft className="size-4" />
				<span className="text-sm">back</span>
			</Link>
			<section className="prose-sm max-w-3xl mx-auto py-32">
				<h1>{post.title}</h1>
				<span>
					Created Date : <small className="font-bold text-xs">{post.date}</small>
				</span>
				<DocumentRenderer document={await post.content()} />
			</section>
		</>
	);
}
