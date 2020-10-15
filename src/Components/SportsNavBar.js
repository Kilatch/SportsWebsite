/**
 * @author @Kilatch
 */
import React, { useState } from 'react'
import './SportsNavBar.css'

const SportsNavBar = ({ sports ,sportHandler}  ) => {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sportsPerSlide, setSportsPerSlide] = useState(4)

  const indexOfLastSport = currentPage * sportsPerSlide
  const indexOfFirstSport = indexOfLastSport - sportsPerSlide
  const currentSports = sports.slice(indexOfFirstSport, indexOfLastSport)

  const nextSports = () => {
    // (currentPage + 1) % sportsPerSlide
    setCurrentPage(currentPage + 1)
  }
  const previousSports = () => {
    setCurrentPage(currentPage - 1)
  }

  const animateSportsNavLinks = (fn) => {
    const navBar = document.getElementById('sportsNavLinks')
    setTimeout(() => {
      navBar.style.transform = `translateX(0%)`
      fn()
    }, 300)
    navBar.style.transform = `translateY(${-110}%)`
  }

  return (
    <div id="sportsNavBar" className="sports-nav-bar">
      <i
        onClick={() => {
          animateSportsNavLinks(previousSports)
        }}
        className={`fas fa-minus add-more ${currentPage <= 1 && 'hide'}`}
      ></i>
      <ul id="sportsNavLinks" className="sports-nav-links">
        {currentSports.map((sport, index) => (
          <li key={index} onClick={() => sportHandler(sport)}>{sport} </li>
        ))}
      </ul>
      <i
        id="previousIcon"
        onClick={() => {
          animateSportsNavLinks(nextSports)
        }}
        className={`fas fa-plus add-more ${
          currentPage >= Math.round(sports.length / sportsPerSlide) + 1 &&
          'hide'
        }`}
      ></i>
    </div>
  )
}

export default SportsNavBar
