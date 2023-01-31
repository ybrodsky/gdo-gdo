import React from 'react';
import { Layout } from '../../common/components/Layout';
import { Counter } from '../components/Counter';
import { Incrementor } from '../components/Incrementor';
import { IncrementByAmount } from '../components/IncrementorAmount';

export const Home = () => {
  return (
    <Layout>
      <div>
        Home page
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Incrementor />
        <IncrementByAmount />
      </div>
    </Layout>
  );
};
