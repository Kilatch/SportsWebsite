/**
 * @author Ali Hussien
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Nav.css'

function Nav() {
  const [navToggle, setNavToggle] = useState(false)

  const handleNavToggle = () => {
    setNavToggle(!navToggle)
    document.body.style.overflowY = navToggle ? 'auto' : 'hidden'
  }

  const setHandleFalse = () => {
    document.body.style.overflowY = 'auto'
    setNavToggle(false)
  }
  return (
    <nav>
      <Link className="logo" to="/">
        <i className="fas fa-futbol link icon">
          <Link className="logo-text" to="/">
            Ball
          </Link>
        </i>
      </Link>
      <ul className={`nav-links ${navToggle && 'active'}`}>
        <li className="link">
          <Link onClick={setHandleFalse} to="/">
            Home
          </Link>
        </li>

        <li className="link">
          <Link onClick={setHandleFalse} to="/sports">
            Sports
          </Link>
        </li>

        <li className="link">
          <Link onClick={setHandleFalse} to="/matches">
            Matches
          </Link>
        </li>

        <li className="link">
          <Link onClick={setHandleFalse} to="/about">
            About
          </Link>
        </li>
      </ul>
      <div onClick={handleNavToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg hamburger" />
      </div>
    </nav>
  )
}

export default Nav