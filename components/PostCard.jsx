"use client";
import Link from "next/link";

function PostCard({ post }) {
  if (!post) {
    return null; // Otra opción sería mostrar un mensaje de error
  }

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md">
    <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl font-bold text-yellow-500 mb-2 cursor-pointer hover:text-gray-300">
            {post.id}. {post.title}
        </h2>
    </Link>
    <p className="text-gray-200">{post.body}</p>
</div>

  );
}

export default PostCard;
