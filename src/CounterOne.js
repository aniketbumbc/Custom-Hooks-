import React from 'react';
import useCounter from './hooks/useCounter';

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(100, 60);

  return (
    <div>
      <h4> Counter Value {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
