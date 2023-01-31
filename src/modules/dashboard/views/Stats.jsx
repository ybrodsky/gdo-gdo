import React from 'react';
import { Layout } from '../../common/components/Layout';
import { Counter } from '../components/Counter';
import { Decrementor } from '../components/Decrementor';

export const Stats = () => {
  return (
    <Layout>
      <div>
        Stats page
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Decrementor />
      </div>
    </Layout>
  );
};
