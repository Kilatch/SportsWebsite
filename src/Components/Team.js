import React, { useState, useEffect } from 'react'
import api from './api'
import CardObj from './CardObj';
import StandingTable from './StandingTable';

function Team({ match: { params: { id } } }) {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    id: id,
    teamName: '',
    matches: [],
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
            standing: tableRes.data
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

  if (state.isLoaded) {
    console.log(state)
    return (
      <div>
        <h1>{state.teamName}</h1>
        <StandingTable items={state.standing} />
        {state.matches.map((match, i) => (
          <CardObj key={i} d={match} getMatchTwo={(x,y)=>{return null}} />
        ))}
      </div>
    )
  } else {
    console.log(state)
    return null;
  }
}

export default Team
