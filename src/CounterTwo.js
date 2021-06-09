import React from 'react';
import useCounter from './hooks/useCounter';

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(200, 20);
  return (
    <div>
      <h4> Counter Value - 2 ..... {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
