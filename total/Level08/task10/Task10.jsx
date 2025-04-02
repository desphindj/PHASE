import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const cache = new Map();

function useAxios(url, config = {}, forceRefresh = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (!forceRefresh && cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(url, config);
      cache.set(url, response.data);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, config, forceRefresh]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refresh: fetchData };
}


function Task10() {
  const { data, loading, error, refresh } = useAxios('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div>
      <h1>Post Details</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <button onClick={refresh}>Refresh</button>
        </div>
      )}
    </div>
  );
}

export default Task10;
