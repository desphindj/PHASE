import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Task8() {
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoints = [
          axios.get('https://jsonplaceholder.typicode.com/posts/1'),
          axios.get('https://jsonplaceholder.typicode.com/users/1'),
          axios.get('https://jsonplaceholder.typicode.com/comments/1')
        ];

        const [post, user, comment] = await Promise.all(endpoints);

        setCombinedData([
          post.data,
          user.data,
          comment.data
        ]);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Combined Data</h1>
      <div>
        <h2>Post</h2>
        <p>{combinedData[0].title}</p>
        <p>{combinedData[0].body}</p>
      </div>
      <div>
        <h2>User</h2>
        <p>{combinedData[1].name}</p>
        <p>{combinedData[1].email}</p>
      </div>
      <div>
        <h2>Comment</h2>
        <p>{combinedData[2].name}</p>
        <p>{combinedData[2].body}</p>
      </div>
    </div>
  );
}

export default Task8;
