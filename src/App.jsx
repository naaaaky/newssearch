import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/login' element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
