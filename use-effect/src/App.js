import { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [resourceType]);
  return (
    <div>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h2>{resourceType}</h2>
      {data && (
        <div>
          {data.map((item) => (
            <pre>{JSON.stringify(item)}</pre>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
