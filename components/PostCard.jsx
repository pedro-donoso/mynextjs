"use client"
import Link from "next/link";

function PostCard({ post }){

    if (!post) {
        return null; // Otra opción sería mostrar un mensaje de error
      }

      return (
        <div className="bg-gray-950 p-10">
          <h2>
            <Link href={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </h2>
          <p>{post.body}</p>
        </div>
      );
}

export default PostCard;