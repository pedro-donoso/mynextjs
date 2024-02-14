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
        <div
          key={post.id}
          style={{
            border: "1px solid #0000ff",
            padding: "20px",
            margin: "10px",
            background: "#ccc",
          }}
        >
          <div style={{ color: "#0000ff" }}>
            {post.id}. {post.title}
          </div>
  <div>
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "150px",
                height: "150px",
                margin: "20px",
              }}
            />

<div style={{color: "#404040"}}>
   <p>{post.description}</p>
</div>


          </div>
          <h3 style={{ margin: "10px", color: "#0000ff" }}>${post.price}</h3>
          <h4 style={{ color: "#ff00ff" }}>Category: {post.category}</h4>

        

         

        </div>
      ))}
    </div>
  );
}

export default PostPages;
