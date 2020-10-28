import React, { useState, useEffect } from 'react'
import api from './api'
import CardObj from './CardObj'
import { Grid } from '@material-ui/core'
import LoadTable from './LoadTable'

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
        if (res.data.length > 1) {
          tmp.matches = res.data
          tmp.isLoaded = true
          tmp.season = res.data[0].round.season.startYear
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
        <h1>{state.leagueName}</h1>
        <h1>{state.season}</h1>
        <LoadTable seasonId={state.id} />
        <h1>Matches</h1>
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
