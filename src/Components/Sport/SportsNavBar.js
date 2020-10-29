/**
 * @author Ali Hussien
 */
import React, { useState } from 'react'
import '../styles/SportsNavBar.css'

const SportsNavBar = ({ sports, onClick }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const sportsPerSlide = 4
  const indexOfLastSport = currentPage * sportsPerSlide
  const indexOfFirstSport = indexOfLastSport - sportsPerSlide
  const currentSports = sports.slice(indexOfFirstSport, indexOfLastSport)

  const nextSports = () => {
    if (sports.length >= sportsPerSlide) setCurrentPage(currentPage + 1)
    resetColors()
  }
  const previousSports = () => {
    setCurrentPage(currentPage - 1)
    resetColors()
  }

  const resetColors = () => {
    let sportNames = Array.from(document.querySelectorAll('#sportName'))
    for (const sportname of sportNames) {
      sportname.classList.remove('highlight')
    }
  }

  const sportClickHandler = (e) => {
    let sportNames = Array.from(document.querySelectorAll('#sportName'))
    for (const sportname of sportNames) {
      if (sportname.innerText === e.target.innerText) {
        e.currentTarget.classList.add('highlight')
      } else {
        sportname.classList.remove('highlight')
      }
    }
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
        className={`fas fa-arrow-left add-more ${currentPage <= 1 && 'hide'}`}
      ></i>
      <ul id="sportsNavLinks" className="sports-nav-links">
        {currentSports.map((sport, index) => (
          <li
            id="sportName"
            key={index}
            onClick={(e) => {
              sportClickHandler(e)
              onClick(sport.id)
            }}
          >
            {sport.name}
          </li>
        ))}
      </ul>
      <i
        id="previousIcon"
        onClick={() => {
          animateSportsNavLinks(nextSports)
        }}
        className={`fas fa-arrow-right add-more ${
          currentPage >= Math.round(sports.length / sportsPerSlide) + 1 &&
          'hide'
        }`}
      ></i>
    </div>
  )
}

export default SportsNavBar
