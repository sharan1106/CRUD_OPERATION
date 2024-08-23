
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './create';
import Read from './read';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} /> 
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </Router>
  );
}

export default App;

