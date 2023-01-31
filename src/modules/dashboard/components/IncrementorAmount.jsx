import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../../redux/counterSlice';

export const IncrementByAmount = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('0');

  const onChange = (e) => {
    setValue(e.target.value || '0');
  };

  const submit = () => {
    dispatch(incrementByAmount(parseInt(value, 10)));
    setValue('0');
  };

  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
      <button onClick={submit}>
        Increment
      </button>
    </div>
  )

};
