import React, { useState, useEffect } from 'react'
import api from './api'
import CardObj from './CardObj';
import { Grid } from '@material-ui/core';
import LoadTable from './LoadTable';
import Button from '@material-ui/core/Button';

function Team({ match: { params: { id } } }) {
  let cachKey = "teamDetail:" + id
  const [state, setState] = useState(
    JSON.parse(sessionStorage.getItem(cachKey)) ||
    {
      error: null,
      isLoaded: false,
      id: id,
      teamName: '',
      matches: [],
      seasonId: '',
      show: "all"
    });

  useEffect(() => {
    if (!state.isLoaded) {
      api.getGamesByTeamId(id).then(res => {
        let teamName

        if (res.data.length > 0) {
          if (res.data[0].homeTeam.id == id) {
            teamName = res.data[0].homeTeam.name
          } else {
            teamName = res.data[0].awayTeam.name
          }
          let tmp = { ...state }
          tmp.isLoaded = true
          tmp.teamName = teamName
          tmp.matches = res.data
          tmp.show = "all"
          tmp.seasonId = res.data[0].round.season.id
          setState(tmp)
          sessionStorage.setItem(cachKey, JSON.stringify(tmp))
        }
      }, error => {
        setState({
          isLoaded: false,
          error: error,
        })
      })
    }
    // eslint-disable-next-line
  }, [])

  let matches = "all";

  let MatchGrid

  let getAwayMatches = () => {
    api.getAwayGamesByTeamId(id).then(res => {
      let tmp = { ...state }
      tmp.awayMatches = res.data
      tmp.show = "away"
      setState(tmp)
      sessionStorage.setItem(cachKey, JSON.stringify(tmp))
    })
  }

  let getHomeMatches = () => {
    api.getHomeGamesByTeamId(id).then(res => {
      let tmp = { ...state }
      tmp.homeMatches = res.data
      tmp.show = "home"
      setState(tmp)
      sessionStorage.setItem(cachKey, JSON.stringify(tmp))
    })
  }

  let homeMatches = () => {
    if (!state.homeMatches) {
      getHomeMatches()
    } else {
      let tmp = { ...state }
      tmp.show = "home"
      setState(tmp)
    }
  }

  let awayMatches = () => {
    if (!state.awayMatches) {
      getAwayMatches()
    } else {
      let tmp = { ...state }
      tmp.show = "away"
      setState(tmp)
    }
  }

  let allMatches = () => {
    let tmp = { ...state }
    tmp.show = "all"
    setState(tmp)
  }

  if (state.show == "all") {
    MatchGrid = state.matches.map((match, i) => (
      <CardObj key={i} d={match} getMatchTwo={(x, y) => { return null }} />
    ))
  } else if (state.show == "home") {
    MatchGrid = state.homeMatches.map((match, i) => (
      <CardObj key={i} d={match} getMatchTwo={(x, y) => { return null }} />
    ))
  } else if (state.show == "away") {
    MatchGrid = state.awayMatches.map((match, i) => (
      <CardObj key={i} d={match} getMatchTwo={(x, y) => { return null }} />
    ))
  }

  if (state.isLoaded) {
    console.log(state)
    return (
      <div>
        {console.log(state.teamName)}
        <h1>{state.teamName}</h1>
        <LoadTable seasonId={state.seasonId} />
        <Button variant="contained" onClick={allMatches}>
          All Matches
        </Button>
        <Button variant="contained" onClick={homeMatches}>
          Home Matches
        </Button>
        <Button variant="contained" onClick={awayMatches}>
          Away Matches
        </Button>
        <Grid item container xs={12}>
          {MatchGrid}
        </Grid>

      </div>
    )
  } else {
    console.log(state)
    return null;
  }
}

export default Team
