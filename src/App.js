import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/reducers/counterReducer";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  console.log(counter);
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setPosts(response.data);
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Hello World <br /> Counter App using Redux. WOW!
      </h1>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
