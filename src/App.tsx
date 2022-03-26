import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import rootStore from '@Redux/index';
import { CarListPage } from '@Component/page/list';

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/list" />} />
        <Route path="/list" element={<CarListPage />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={rootStore}>
      <AppRouter />
    </Provider>
  );
}
