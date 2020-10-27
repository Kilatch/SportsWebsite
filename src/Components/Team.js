import React, { useState, useEffect } from 'react'
import api from './api'
import CardObj from './CardObj';
import { Grid } from '@material-ui/core';
import StandingTable from './StandingTable';
import Button from '@material-ui/core/Button';

function Team({ match: { params: { id } } }) {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    id: id,
    teamName: '',
    matches: [],
    homeMatches: [],
    awayMatches: [],
    show: "all",
    standing: []
  });

  useEffect(() => {

    api.getGamesByTeamId(id).then(res => {
      let teamName

      if (res.data.length > 0) {
        if (res.data[0].homeTeam.id == id) {
          teamName = res.data[0].homeTeam.name
        } else {
          teamName = res.data[0].awayTeam.name
        }
        api.getTableBySeasonId(res.data[0].round.season.id).then(tableRes => {
          setState({
            isLoaded: true,
            teamName: teamName,
            matches: res.data,
            standing: tableRes.data,
            show: "all"
          })
        }, error => {
          setState({
            isLoaded: false,
            error: error,
          })
        })
      }
    }, error => {
      setState({
        isLoaded: false,
        error: error,
      })
    })
    // eslint-disable-next-line
  }, [])

  let matches = "all";

  let MatchGrid 

  let getAwayMatches = () => {
    api.getAwayGamesByTeamId(id).then(res => {
      let tmp = {...state}
      tmp.awayMatches = res.data
      tmp.show = "away"
      setState(tmp)
    })
  }

  let getHomeMatches = () => {
    api.getHomeGamesByTeamId(id).then(res => {
      let tmp = {...state}
      tmp.homeMatches = res.data
      tmp.show = "home"
      setState(tmp)
    })
  }

  let homeMatches = () => {
    if (!state.homeMatches) {
      getHomeMatches()
    } else {
      let tmp = {...state}
      tmp.show = "home"
      setState(tmp)
    }
  }

  let awayMatches = () => {
    if (!state.awayMatches) {
      getAwayMatches()
    } else {
      let tmp = {...state}
      tmp.show = "away"
      setState(tmp)
    }
  }

  let allMatches = () => {
    let tmp = {...state}
    tmp.show = "all"
    setState(tmp)
  }

  if (state.show == "all") {
    MatchGrid = state.matches.map((match, i) => (
        <CardObj key={i} d={match} getMatchTwo={(x, y) => { return null }} />
      ))
  } else if (state.show == "home"){
    MatchGrid = state.homeMatches.map((match, i) => (
      <CardObj key={i} d={match} getMatchTwo={(x, y) => { return null }} />
    ))
  } else if (state.show == "away"){
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
        <StandingTable items={state.standing} />
        <Button variant="contained" onClick={allMatches}>
          All Matches
        </Button>
        <Button variant="contained" onClick={homeMatches}>
          Home Matches
        </Button>
        <Button variant="contained" onClick={awayMatches}>
          Away Matches
        </Button>
        <Grid container spacing={2}>
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
