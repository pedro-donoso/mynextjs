async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: "linear-gradient(to bottom right, #ffff00, #ffa500)",
        border: "1px solid #000",
      }}
    >
      <p>
        Estás viendo la Publicación <strong>N°{params.postId}</strong>{" "}
      </p>
      {post && (
        <div>
          <h2>{post.id}. {post.title}</h2>
          <p>
            <strong>Description: </strong>
            {post.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default Page;
