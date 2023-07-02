import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { TrendDetails } from '../pages/TrendDetails';

const Trends = lazy(() =>
  import('../pages/Trends').then((module) => ({
    default: module.Trends,
  })),
);

const Trend = lazy(() =>
  import('../pages/TrendDetails').then((module) => ({
    default: module.TrendDetails,
  })),
);

export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Trends />} />
          <Route path="/trend" element={<Trends />} />
          <Route path="/trend/:id" element={<TrendDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
