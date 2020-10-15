import React, { useEffect, useState } from 'react'
import api from './api'

import MatTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function StandingTable(props) {
  //TODO: ta in season id som ett argument 
  //TODO: della upp tablerow till en separat component 
  //TODO: ta in data't som argument istället för att hämta det själv

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    api.getTableBySeasonId(props.id).then(res => {
      setState({
        isLoaded: true,
        items: res.data
      })
      console.log(res.data)
    }, error => {
      setState({
        isLoaded: true,
        error: error,
        items: []
      })
      console.log(state)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <TableContainer component={Paper}>
      <MatTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">MP</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">G</TableCell>
            <TableCell align="right">GC</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.items.map(row => (
            <TableRow key={row.teamId}>
              <TableCell align="right">{row.teamName}</TableCell>
              <TableCell align="right">{row.gamesPlayed}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.draws}</TableCell>
              <TableCell align="right">{row.loss}</TableCell>
              <TableCell align="right">{row.goals}</TableCell>
              <TableCell align="right">{row.goalsConseded}</TableCell>
              <TableCell align="right">{row.goalDifference}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </MatTable>
    </TableContainer>
  )
  /*
  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      
    );
  }
  */

}
