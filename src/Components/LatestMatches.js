import React, { useEffect, useState } from 'react'
import './LatestMatches.css'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const LeagueSelector = () => {
  return (
    <div className="drop-down">
      <ul className="select-league">
        Select League
        <ul className="sport-title">
          Football
          <li className="league-title">Superettan</li>
          <li className="league-title">English Premiere League</li>
        </ul>
        <ul className="sport-title">Basket</ul>
      </ul>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '200px',
  },
}))

const LatestMatches = ({ latestmatches }) => {
  const [filterdMatches, setFilteredMatches] = useState([])
  const [allLeagues, setAllLeagues] = useState([])
  const handleChange = (e) => {}

  const leagueList = () => {
    let items = []
    Object.keys(allLeagues).map((el, index1) => {
      items.push(<ListSubheader key={index1}>{el}</ListSubheader>)
      allLeagues[el].map((league, index2) => {
        items.push(
          <MenuItem data-name={league} value={index2}>
            {league}
          </MenuItem>
        )
      })
    })
    return items
  }

  useEffect(() => {
    let leagues = {}
    for (const match of latestmatches) {
      let sport = match.round.season.league.sport.name
      let league = match.round.season.league.name
      if (leagues[sport]) {
        if (!leagues[sport].includes(league)) leagues[sport].push(league)
      } else {
        leagues[sport] = [league]
      }
    }
    setAllLeagues(leagues)
  }, [latestmatches])

  const classes = useStyles()
  return (
    <div className="latest-games-container">
      <div className="latest-games-header">
        <div className="latest-games-header-info">
          <p className="league-name">test</p>
          <p>11 Feburary 2020</p>
        </div>
        <div className="latest-games-selectors">
          <LeagueSelector />
        </div>
      </div>
      <div className="latest-games-body">
        <Match />
      </div>
      <div className="latest-games-footer"></div>
    </div>
  )
}

export default LatestMatches
const Match = () => {
  return (
    <div className="match-container">
      <div className="teams">
        <div className="team">Juventus</div>
        <div className="score-container">
          <div className="score">2</div>
          <div className="score">-</div>
          <div className="score">1</div>
        </div>
        <div className="team">Real Madrid</div>
      </div>
    </div>
  )
}
