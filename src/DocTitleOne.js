import React, { useState } from 'react';
import useDocTitle from './hooks/useDocTitle';

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocTitle(count);

  return (
    <>
      <h4>Custom Hooks</h4>
      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

export default DocTitleOne;
