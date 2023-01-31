import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../../redux/counterSlice';

export const Incrementor = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>
        Increment!
      </button>
    </div>
  )
}