import PostCard from '@/PostCard';

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000))

  return data;
}

async function PostPages() {
  const posts = await loadPosts();
  console.log(posts);

  return (
    <div
   
    >
      {posts.map((post) => (

        // eslint-disable-next-line react/jsx-key
        <div style={{
        padding: "20px",
        margin: "20px",
        backgroundImage: "linear-gradient(to bottom right, #ffff00, #ffa500)",
        border: "1px solid #000",
      }}>
           <PostCard post={post} key={post.id}  />
        </div>
       
      ))}
    </div>
  );
}

export default PostPages;
