/**
 * @author Ali Hussien
 */
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import LatestMatches from './LatestMatches'
import Footer from './Footer'

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
      <Footer />
    </div>
  )
}

export default Home
