import React from 'react';
import MetaDescription from './MetaDescription';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <MetaDescription />
      <div>
          <h1>App</h1>
      </div>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App