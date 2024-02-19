import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div className="p-5">
    <p className="text-yellow-500">
        Estás viendo la Publicación <strong className="font-bold">N°{params.postId}</strong>{" "}
    </p>
    {post && (
        <div>
            <h2 className="text-xl font-bold mb-2">
                {post.id}. {post.title}
            </h2>
            <p className="text-gray-100">
                <strong className="font-bold">Description: </strong>
                {post.body}
            </p>

            <hr className="my-4 border-gray-300" />

            <h3 className="text-lg font-bold mb-2">Otras Publicaciones: </h3>

            <Suspense fallback={<div>Cargando Publicaciones...</div>}>
                <Posts />
            </Suspense>
        </div>
    )}
</div>

  );
}

export default Page;
