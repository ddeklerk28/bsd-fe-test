import React from 'react';
import { CssBaseline } from '@mui/material';

import { Navigation } from './components/Navigation';
import { AppRoutes } from './components/Routes';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <AppRoutes />
    </>
  );
};

export default App;
