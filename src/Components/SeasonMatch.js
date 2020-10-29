import React, { useState, useEffect } from 'react'
import api from './api'
import CardObj from './CardObj'
import { Grid } from '@material-ui/core'
import LoadTable from './LoadTable'
import './styles/SportLeagueList.css'

export default function SeasonMatch({ match: { params: { id } } }) {
  let cachKey = "seasonMatch:" + id
  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem(cachKey)) ||
    {
      id: id,
      leagueName: '',
      season: '',
      matches: [],
      error: null,
      isLoaded: false,
    })

  useEffect(() => {
    if (!state.isLoaded) {
      api.getMatchBySeason(id).then(res => {

        let tmp = { ...state }
        if (res.data.length > 0) {
          tmp.matches = res.data
          tmp.isLoaded = true
          tmp.season = res.data[0].round.season.startYear + " - " + res.data[0].round.season.endYear 
          tmp.leagueName = res.data[0].round.season.league.name
          setState(tmp)
          sessionStorage.setItem(cachKey, JSON.stringify(tmp))
        } else {
          tmp.error = "season empty"
          setState(tmp)
        }
      }, error => {
        setState({
          isLoaded: false,
          error: "error " + error.response,
        })
      })
    }
    // eslint-disable-next-line
  }, [])

  if (state.error) {
    return <div><h1>{state.error}</h1></div>
  } else if (!state.isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1 className="league-list">{state.leagueName}</h1>
        <h1 className="season-year">{state.season}</h1>
        <LoadTable seasonId={state.id} />
        <h1 className="league-list">Matches</h1>
        <Grid item container xs={12}>
          {state.matches.map((data, index) => (
            <div key={index}>
              <CardObj d={data} getMatchTwo={(x, y) => { return null }} />
            </div>
          ))}
        </Grid>
      </>
    )
  }
}
