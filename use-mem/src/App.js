import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const buttonStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    display: "block",
    padding: "10px",
  };
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        value={number}
      />
      <button
        style={buttonStyle}
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      <div>{doubleNumber}</div>
    </div>
  );
}

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

export default App;
