async function loadPost(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div style={{ padding: "20px", backgroundImage: "linear-gradient(to bottom right, #ffff00, #ffa500)", border: "1px solid #000"}} >
      <p>
        Estás viendo la Publicación <strong>N°{params.postId}</strong>{" "}
      </p>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: "300px",
              height: "300px",
              padding: "10px",
              margin: "10px",
            }}
          />
          <p><strong>Description: </strong>{post.description}</p>
          <h2>${post.price}</h2>
          <p>{post.category}</p>
        </div>
      )}
    </div>
  );
}

export default Page;
