import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home  from './pages/Home';
import { Course } from './pages/Course';
import { Live } from './pages/Live';
import { Contact } from './pages/Contact';
import Error from './pages/Error';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Account from './pages/Account';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
          <Link to="/course" className="list">
            Courses
          </Link>
          <Link to="/live" className="list">
            Live 
          </Link>
          <Link to="/contact" className="list">
            Contact
          </Link>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/course" element={<Course />} />
         <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />}>
            <Route path="profile" element={<Profile />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<Error />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

     




    </div>
  );
}

export default App;
