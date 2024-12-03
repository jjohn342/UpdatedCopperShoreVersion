import React, { useState } from 'react';
import './Blog.css'; // Reuse existing Blog.css for styles

function BlogPost({ title, content, image }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="blog-post">
      <div className="blog-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="like-dislike-buttons">
          <button className="like-button" onClick={handleLike}>
            👍 Like {likes}
          </button>
          <button className="dislike-button" onClick={handleDislike}>
            👎 Dislike {dislikes}
          </button>
        </div>
      </div>
      <div className="blog-image-container">
        <img src={image} alt="Blog" className="blog-image" />
      </div>
    </div>
  );
}

export default BlogPost;
