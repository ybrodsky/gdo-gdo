import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../../../redux/counterSlice';

export const Decrementor = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>
        Decrement!
      </button>
    </div>
  )
}