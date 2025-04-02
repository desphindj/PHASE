// src/App.js
import React, { useEffect, useState } from 'react';
import api from './Task7';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div id="loading-indicator" style={{ display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', background: 'yellow', textAlign: 'center' }}>
        Loading...
      </div>
    </div>
  );
}

export default App;
