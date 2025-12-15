import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}/`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.created_at}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default Article;
