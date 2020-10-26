/**
 * @author @Ali
 */
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import LatestMatches from './LatestMatches'

const Home = () => {
  const [latestMatches, setLatestMatches] = useState([])

  const seeLatestMatches = () => {
    document.getElementById('seeLatestMatches').scrollIntoView({
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    Axios.get(
      'http://grupp5test.jls-sto1.elastx.net/get/gamebydate/2018-11-09'
    ).then((data) => setLatestMatches(data.data))
  }, [])

  return (
    <div className="home-container">
      <div className="front-page-container">
        <div className="front-page-info">
          <p>Welcome to the worlds largest sport website</p>
          <p
            id="seeLatestMatches"
            onClick={seeLatestMatches}
            className="see-latest-matches"
          >
            Click here to see the latest matches
          </p>
        </div>
      </div>
      <div className="latest-matches">
        <LatestMatches latestmatches={latestMatches} />
      </div>
    </div>
  )
}

export default Home
