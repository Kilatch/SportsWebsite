/**
 * @author Ali Hussien
 */

import React, { useEffect, useState } from 'react'
import './LatestMatches.css'
import Selector from './Selector'

const LatestMatches = ({ latestmatches }) => {
  const [filterdMatches, setFilteredMatches] = useState([])
  const [allLeagues, setAllLeagues] = useState([])
  const [selectedSportLeague, setSelectedSportLeague] = useState(48)
  const [currentMatch, setCurrentMatch] = useState({
    homeTeam: '',
    awayTeam: '',
    result: [0, 0],
  })
  const handleChange = (e) => {
    setSelectedSportLeague(e)
  }

  const paginateClicked = (match) => {
    setCurrentMatch(match)
  }

  const animateMatches = () => {
    setInterval(() => {
      for (const filteredmatch of filterdMatches) {
        setCurrentMatch(filteredmatch)
      }
    }, 1000)
  }

  useEffect(() => {
    let filteredMatchesById = latestmatches.filter(
      (match) => match.round.season.league.id === selectedSportLeague
    )
    let temp = []
    filteredMatchesById.map((match) => {
      temp.push({
        awayTeam: match.awayTeam.name,
        homeTeam: match.homeTeam.name,
        result: [match.result.awayScore, match.result.homeScore],
        round: match.round.roundNr,
        numberOfRound: match.round.season.numberOfRound,
        leagueId: match.round.season.league.id,
        leagueName: match.round.season.league.name,
      })
    })
    setFilteredMatches(temp)
    if (temp[0]) {
      setCurrentMatch(temp[0])
    }
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
  }, [latestmatches, selectedSportLeague])

  return (
    <div className="latest-games-container">
      <div className="latest-games-header">
        <div className="latest-games-header-info">
          <p className="league-name">{currentMatch.leagueName}</p>
          <p className="league-date">11 Feburary 2020</p>
        </div>
        <div className="latest-games-selectors">
          <Selector allLeagues={allLeagues} labelClickListener={handleChange} />
        </div>
      </div>
      <div className="latest-games-body">
        <Match data={currentMatch} />
      </div>
      <div className="latest-games-footer">
        {filterdMatches.map((match, index) => (
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
const Match = ({ data: { homeTeam, awayTeam, result } }) => {
  const teamClicked = () => {}

  return (
    <div className="match-container">
      <div className="teams">
        <div className="team">{homeTeam}</div>
        <div className="score-container">
          <div className={`score ${result[1] > result[0] && 'won'}`}>
            {result[1]}
          </div>
          <div className="score">-</div>
          <div className={`score ${result[0] > result[1] && 'won'}`}>
            {result[0]}
          </div>
        </div>
        <div className="team">{awayTeam}</div>
      </div>
    </div>
  )
}
