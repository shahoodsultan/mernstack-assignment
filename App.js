import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage';
import SignupPage from './components/SignupPage';
import TodoApp from './components/TodoApp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


function App() {

  
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;