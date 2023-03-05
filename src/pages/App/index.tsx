import { useState } from 'react';
import './index.css';

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src="/react.svg" alt="" width={100} height={100} />
      <h1>AJ Alchemy</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
};
