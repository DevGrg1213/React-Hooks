import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  function increment() {
    setCount((prevCount) => prevCount + 1);
    setColor("green");
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
    setColor("red");
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h2
        style={{
          backgroundColor: color,
          display: "inline-block",
          marginInline: "10px",
          padding: "10px",
        }}
      >
        {count}
      </h2>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
