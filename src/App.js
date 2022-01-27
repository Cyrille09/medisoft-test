import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewUsers from '../src/pages/users';
import AddUser from '../src/pages/users/add';
import EditUser from '../src/pages/users/edit';
import EcahUser from '../src/pages/users/viewEcah';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/users" element={<ViewUsers />} />
        <Route exact path="/" element={<ViewUsers />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/each/:id" element={<EcahUser />} />
      </Routes>
    </Router>
  );
}

export default App;
