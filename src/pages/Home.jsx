import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
console.log("API URL =", import.meta.env.VITE_API_URL);

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts/`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>

          <p>{post.created_at}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
