/**
 * @author @Kilatch
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [navToggle, setNavToggle] = useState(false)

  const handleNavToggle = () => {
    setNavToggle(!navToggle)
  }

  const setHandleFalse = () => {
    setNavToggle(false)
  }
  return (
    <nav>
      <div className="logo">
        <i className="fas fa-futbol link icon">
          <Link to="/">Ball</Link>
        </i>
      </div>
      <ul className={`nav-links ${navToggle && 'active'}`}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>

        <li className="link">
          <Link onClick={setHandleFalse} to="/sports">
            Sports
          </Link>
        </li>

        <li className="link">
          <Link to="/matches">Matches</Link>
        </li>

        <li className="link">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <div onClick={handleNavToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg hamburger" />
      </div>
    </nav>
  )
}

export default Nav