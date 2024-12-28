import React from "react";
import "./App.css";
import React18FormHandling from "./components/React18FormHandling";
import React19FormHandling from "./components/React19FormHandling";
import React18OptimisticUI from "./components/React18OptimisticUI";
import React19OptimisticUI from "./components/React19OptimisticUI";
import ReactCompilerExample from "./components/ReactCompilerExample";
import React18DataFetching from "./components/React18DataFetching";
import React19DataFetching from "./components/React19DataFetching";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Feature Comparison: React 18 vs React 19</h1>
      </header>
      <main>
        <section>
          <h2>Form Handling</h2>
          <div className="comparison">
            <div className="react18">
              <h3>React 18 Approach</h3>
              <React18FormHandling />
            </div>
            <div className="react19">
              <h3>React 19 Approach</h3>
              <React19FormHandling />
            </div>
          </div>
        </section>
        <section>
          <h2>Optimistic UI Updates</h2>
          <div className="comparison">
            <div className="react18">
              <h3>React 18 Approach</h3>
              <React18OptimisticUI />
            </div>
            <div className="react19">
              <h3>React 19 Approach</h3>
              <React19OptimisticUI />
            </div>
          </div>
        </section>
        <section>
          <h2>React Compiler Optimization</h2>
          <div className="comparison">
            <div className="react18">
              <h3>React 18 Approach</h3>
              <p>
                In React 18, developers manually optimize components using hooks
                like <code>useMemo</code> and <code>useCallback</code> to
                prevent unnecessary re-renders.
              </p>
            </div>
            <div className="react19">
              <h3>React 19 Approach</h3>
              <ReactCompilerExample />
            </div>
          </div>
        </section>
        <section>
          <h2>Data Fetching</h2>
          <div className="comparison">
            <div className="react18">
              <h3>React 18 Approach</h3>
              <React18DataFetching />
            </div>
            <div className="react19">
              <h3>React 19 Approach</h3>
              <React19DataFetching />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
