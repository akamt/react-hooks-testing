import { useCallback, useState } from 'react';

interface UseCounterReturnType {
  count: number;
  increment: () => void;
}

const useCounter = (): UseCounterReturnType => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((n) => n + 1), []);

  return { count, increment };
};

export default useCounter
