"use client";
import Link from "next/link";

function PostCard({ post }) {
  if (!post) {
    return null; // Otra opción sería mostrar un mensaje de error
  }

  return (
    <div className="bg-gray-950 p-5">
      <Link href={`/posts/${post.id}`}>
        <h2>
          {post.id}. {post.title}
        </h2>
      </Link>

      <p className="text-slate-200">{post.body}</p>
    </div>
  );
}

export default PostCard;
