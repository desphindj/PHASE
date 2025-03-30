import React from "react";
import useFetch from "./UseFetch";

const FetchComponent = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/2");

  return (
    <div style={{ textAlign: "center", fontFamily: "Poppins", padding: "20px" }} className="bor">


      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchComponent;
