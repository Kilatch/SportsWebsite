/**
 * @author Ali Hussien
 */

import React, { useEffect, useState } from 'react'
import '../styles/LatestMatches.css'
import Selector from './Selector'
import { Link } from 'react-router-dom'

const LatestMatches = ({ latestmatches }) => {
  const [filteredMatches, setFilteredMatches] = useState([])
  const [allLeagues, setAllLeagues] = useState([])
  const [selectedSportLeague, setSelectedSportLeague] = useState()
  const [currentMatch, setCurrentMatch] = useState({
    homeTeam: '',
    awayTeam: '',
    result: [0, 0],
  })
  const handleChange = (e) => {
    setSelectedSportLeague(e)
  }

  const setProgressPercent = (match) => {
    document.getElementById('round-progress-bar').style.width = `${
      (match.round / match.numberOfRound) * 100
    }%`
  }

  const filterMatches = () => {
    let filteredMatchesById = latestmatches.filter(
      (match) => match.round.season.league.id === selectedSportLeague
    )
    let temp = []
    filteredMatchesById.map((match) => {
      temp.push({
        awayTeam: match.awayTeam.name,
        awayID: match.awayTeam.id,
        homeTeam: match.homeTeam.name,
        homeID: match.homeTeam.id,
        result: [match.result.awayScore, match.result.homeScore],
        round: match.round.roundNr,
        numberOfRound: match.round.season.numberOfRound,
        leagueId: match.round.season.league.id,
        leagueName: match.round.season.league.name,
      })
    })
    setFilteredMatches(temp)
  }

  const addAllLeagues = () => {
    let sportLeagues = []
    let sports = []
    let leagues = []

    for (const match of latestmatches) {
      let sport = match.round.season.league.sport
      let sportName = sport.name
      let sportId = sport.id
      let league = match.round.season.league
      let leagueId = league.id
      let leagueName = league.name
      if (!sports.includes(sportName)) {
        sportLeagues.push({
          name: sportName,
          sportId: sportId,
          children: [{ leagueName, leagueId }],
        })
        sports.push(sportName)
        leagues.push(leagueName)
      } else {
        if (!leagues.includes(leagueName)) {
          for (const sportleague of sportLeagues) {
            if (sportleague.name === sportName) {
              sportleague.children.push({ leagueName, leagueId })
            }
          }
          leagues.push(leagueName)
        }
      }
    }
    setAllLeagues(sportLeagues)
  }

  const paginateClicked = (match) => {
    setProgressPercent(match)
    setCurrentMatch(match)
  }

  useEffect(() => {
    if (allLeagues.length > 0) {
      setSelectedSportLeague(allLeagues[0].children[0].leagueId)
    }
  }, [allLeagues])

  useEffect(() => {
    if (selectedSportLeague) {
      filterMatches()
    }
  }, [selectedSportLeague])

  useEffect(() => {
    if (filteredMatches.length > 0) {
      setCurrentMatch(filteredMatches[0])
      setProgressPercent(filteredMatches[0])
    }
  }, [filteredMatches])

  useEffect(() => {
    addAllLeagues()
  }, [latestmatches])

  return (
    <div className="latest-games-container">
      <div className="latest-games-header">
        <div className="latest-games-header-info">
          <div className="league-name">
            <Link
              className="league-name"
              to={`/league/${currentMatch.leagueId}`}
            >
              {currentMatch.leagueName}
            </Link>
          </div>
          <p className="league-date">11 Feburary 2020</p>
        </div>
        <div className="round-progress">
          <div id="round-progress-bar"></div>
        </div>
        <div className="latest-games-selectors">
          <Selector allLeagues={allLeagues} labelClickListener={handleChange} />
        </div>
      </div>
      <div className="latest-games-body">
        <Match data={currentMatch} />
      </div>
      <div className="latest-games-footer">
        {filteredMatches.length > 1 &&
          filteredMatches.map((match, index) => (
            <li
              key={index}
              onClick={() => {
                paginateClicked(match)
              }}
              className={`paginate`}
            ></li>
          ))}
      </div>
    </div>
  )
}

export default LatestMatches
const Match = ({ data: { homeID, awayID, homeTeam, awayTeam, result } }) => {
  const teamClicked = () => {}

  return (
    <div className="match-container">
      <div className="teams">
        <div className="team">
          <Link className="team" to={`/team/${homeID}`}>
            {homeTeam}
          </Link>
        </div>
        <div className="score-container">
          <div className={`score ${result[1] > result[0] && 'won'}`}>
            {result[1]}
          </div>
          <div className="score">-</div>
          <div className={`score ${result[0] > result[1] && 'won'}`}>
            {result[0]}
          </div>
        </div>
        <div className="team">
          <Link className="team" to={`/team/${awayID}`}>
            {awayTeam}
          </Link>
        </div>
      </div>
    </div>
  )
}
