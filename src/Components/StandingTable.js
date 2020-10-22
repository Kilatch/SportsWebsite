import React from 'react'

import MatTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles/Table.css'

export default function StandingTable(props) {
  if (props.items != null && props.items.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th className='goals'>G</th>
            <th className='goals'>GC</th>
            <th className='goals'>GD</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map(row => (
            <tr key={row.teamId}>
              <td>{row.teamName}</td>
              <td>{row.gamesPlayed}</td>
              <td>{row.wins}</td>
              <td>{row.draws}</td>
              <td>{row.loss}</td>
              <td className='goals'>{row.goals}</td>
              <td className='goals'>{row.goalsConseded}</td>
              <td className='goals'>{row.goalDifference}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
    /*
    (
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
            {props.items.map(row => (
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
            ))}
          </TableBody>
        </MatTable>
      </TableContainer>
    )*/
  } else {
    return null;
  }
}
