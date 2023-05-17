import React, { useState } from "react";

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Count: {count}</h1>
      <div className="flex flex-row gap-2">
        <button
          data-testid="increment-button"
          className="py-2 px-4 bg-slate-900 rounded text-white"
          onClick={increment}
        >
          Increment
        </button>
        <button
          data-testid="decrement-button"
          className="py-2 px-4 bg-slate-900 rounded text-white"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          data-testid="reset-button"
          className="py-2 px-4 bg-slate-900 rounded text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
