import React, { useState } from "react";

function ReactCompilerExample() {
  const [count, setCount] = useState(0);

  /*
    In React 19, the React Compiler automatically optimizes 
    components like ReactCompilerExample by memoizing functions and preventing
    unnecessary re-renders, eliminating the need for manual optimization with hooks like useCallback
  */
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ReactCompilerExample;
