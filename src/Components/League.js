import React, { useState, useEffect } from 'react'
import api from './api'
import { Link } from 'react-router-dom'
import './styles/SportLeagueList.css'

export default function League({ match: { params: { id } } }) {

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    leagueId: id,
    leagueName: '',
    seasons: []
  })

  useEffect(() => {
    api.getSeasonsByLeague(id).then(res => {
      let tmp = {...state}
      tmp.isLoaded = true
      if (res.data.length > 0) {
        tmp.leagueName = res.data[0].league.name
      } else {
        tmp.leagueName = "Error loading league name"
      }
      tmp.seasons = res.data
      setState(tmp)
    })
  }, [])

  if (state.error) {
    return <h1>error.message</h1>
  } else if (!state.isLoaded) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <h1 className="league-list">{state.leagueName}</h1>
        <h2 className="season-year">Seasons:</h2>
        {state.seasons.map((season,i)=>(
          <Link key={i} to={"/season/"+season.id} >
            <h2 className="season-year">{""+season.startYear +" - " + season.endYear}</h2>
          </Link>
        ))}
      </>
    )
  }
}
