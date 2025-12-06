import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const { id } = useParams(); // 从 URL 获得文章 id
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 进入页面时加载文章内容
  useEffect(() => {
    fetch(`http://localhost:8000/api/posts/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8000/api/posts/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Post updated!");
        navigate(`/posts/${id}`);
      });
  }

  return (
    <div>
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditPost;
