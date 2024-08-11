import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication logic if necessary
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>To-do List App</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/todo">To-Do List</Link></li>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
