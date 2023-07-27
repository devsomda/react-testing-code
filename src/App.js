import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h3>{count} </h3>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        더하기
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        빼기
      </button>
    </div>
  );
}

export default App;
