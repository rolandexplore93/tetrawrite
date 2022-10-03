import React from 'react';
import './assets/styles/index.scss';
import MetaDescription from './MetaDescription';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <MetaDescription />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App