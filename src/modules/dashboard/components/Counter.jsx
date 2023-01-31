import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      Current value: {value}
    </div>
  );
};
