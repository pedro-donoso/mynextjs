async function loadPosts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

async function PostPages() {
  const posts = await loadPosts();
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.id}. {post.title}</h3>
          <p>
            {post.description}
          </p>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "200px", height: "200px" }}
          />
          <h3>${post.price}</h3>
          <h3>{post.category}</h3>
        </div>
      ))}
    </div>
  );
}

export default PostPages;
