import { useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h4>My name is {text}</h4>
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default App;
