import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
      setLoading(false);
    };
    getPosts();
    //resuts.then((error) => console.log("error occured"));
    //if (error) return <Error error={error} />;
  }, []);

  return (
    <div>
      <p>Post Data</p>
      {loading ? (
        <h4 style={{ color: "red" }}>Loading data..wait</h4>
      ) : (
        posts.map((post) => {
          return <h4 key={post.id}>{post.title}</h4>;
        })
      )}
    </div>
  );
}

export default App;
