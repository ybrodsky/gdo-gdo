import React from "react";
import { Provider } from 'react-redux';
import { AppRouter } from "./app-router";
import { Layout } from './modules/common/components/Layout';
import { store } from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
