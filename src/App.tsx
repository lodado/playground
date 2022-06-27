import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@Component/pages/Login';
import CompoundPattern from '@Component/pages/DesignPattern/CompoundPattern';

const queryClient = new QueryClient();

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/list" element={<Login />} />
        <Route path="/compoundpattern" element={<CompoundPattern />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
