async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
            backgroundImage:
              "linear-gradient(to bottom right, #ffff00, #ffa500)",
          }}
        >
          <div style={{ color: "#0000ff" }}>
            {post.id}. {post.title}
          </div>
          <div>
            <div style={{ color: "#404040" }}>
              <p>
                <strong>Description:</strong> {post.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostPages;
