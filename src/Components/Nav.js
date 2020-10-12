import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [navToggle, setNavToggle] = useState(false)

  const handleNavToggle = () => {
    setNavToggle(!navToggle)
  }
  return (
    <nav>
      <div className="logo">
        <i className="fas fa-futbol" />
        <h4>Ball</h4>
      </div>
      <ul className={`nav-links ${navToggle && 'active'}`}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link to="/sports">Sports</Link>
        </li>

        <li className="link">
          <Link to="/teams">Teams</Link>
        </li>

        <li className="link">
          <Link to="/matches">Matches</Link>
        </li>

        <li className="link">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div onClick={handleNavToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg hamburger" />
      </div>
    </nav>
  )
}

export default Nav
