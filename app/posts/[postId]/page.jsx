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
    <div>
      <p>
        Estás viendo la Publicación <strong>N°{params.postId}</strong>{" "}
      </p>
      {post && (
        <div>
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>
            <strong>Description: </strong>
            {post.body}
          </p>

          <hr />

          <h3>Otras Publicaciones</h3>

          <Suspense fallback={<div>Cargando Publicaciones...</div>}>
            <Posts />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default Page;
