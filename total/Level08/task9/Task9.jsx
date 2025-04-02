import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Task9() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
          cancelToken: source.token,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled:', err.message);
        } else {
          setError('Failed to fetch data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel('Request canceled by the user.');
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Task9;
