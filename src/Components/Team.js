import React, { useState, useEffect } from 'react'
import api from './api'
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
        if (res.data[0].homeTeam.id == state.id) {
          teamName = res.data[0].homeTeam.name 
        } else {
          teamName = res.data[0].awayTeam.name 
        }
        api.getTableBySeasonId(res.data[0].round.season.id).then(tableRes => {
          tableRes.data.every(element => {
            if (element.teamId == state.id) {
              setState({ 
                isLoaded: true,
                teamName: teamName,
                matches: res.data,
                standing: element 
              })
              return false
            }
          });
        }, error => {
          setState({
            isLoaded: true,
            error: error,
          })
        })
      }
    }, error => {
      setState({
        isLoaded: true,
        error: error,
      })
    })



    // eslint-disable-next-line
  }, [])
  
  if (state.standing != null && state.teamName != null) {
    return (
      <div>
        {console.log(state.teamName)}
        <h1>{state.teamName}</h1>
        <StandingTable items={[state.standing]} />
      </div>
    )
  } else {
    return null;
  }
}

export default Team
