import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/")
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
