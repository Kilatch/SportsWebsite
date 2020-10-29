import React, { useState, useEffect } from 'react'
import api from './api'
import { Link } from 'react-router-dom'
import './styles/SportLeagueList.css'

export default function League({
  match: {
    params: { id },
  },
}) {
  let cachKey = 'leagewithseasons:' + id

  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem(cachKey)) || {
      error: null,
      isLoaded: false,
      leagueId: id,
      leagueName: '',
      seasons: [],
    }
  )

  useEffect(() => {
    if (!state.isLoaded) {
      api.getSeasonsByLeague(id).then(
        (res) => {
          let tmp = { ...state }
          tmp.isLoaded = true
          if (res.data.length > 0) {
            tmp.leagueName = res.data[0].league.name
          } else {
            tmp.leagueName = 'Error loading league name'
          }
          tmp.seasons = res.data
          setState(tmp)
          sessionStorage.setItem(cachKey, JSON.stringify(tmp))
        },
        (err) => {
          setState({
            isLoaded: false,
            error: err,
          })
        }
      )
    }
  }, [])

  if (state.error) {
    return <h1>error.message</h1>
  } else if (!state.isLoaded) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className="league-list-container">
        <h1 className="league-list-name">{state.leagueName}</h1>
        <p>Select a season</p>
        {state.seasons.map((season, i) => (
          <Link className="season-link" key={i} to={'/season/' + season.id}>
            <h2 className="season-year-v2">
              {'' + season.startYear + ' - ' + season.endYear}
            </h2>
          </Link>
        ))}
      </div>
    )
  }
}
