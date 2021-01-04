import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right">
            <li><a href="/profile" className="nav-link">{user.name}'s Profile</a></li>
            <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
            <li><a href='/' className="nav link logo">+ 1</a></li>
          </ul>
        </div>
      </nav>
    </>
    :
    <>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right">
            <li><a href="/login" className="nav-link">Log In</a></li>
            <li><a href="/signup" className="nav-link">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;