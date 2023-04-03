import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Messages from './Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
