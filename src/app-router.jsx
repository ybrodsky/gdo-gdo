import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './modules/dashboard/views/Home';
import { Stats } from './modules/dashboard/views/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/stats',
    element: <Stats />
  }
]);


export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
