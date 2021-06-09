import { useEffect } from 'react';

function useDocTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return <div></div>;
}

export default useDocTitle;
