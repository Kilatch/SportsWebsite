import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Table.css'

export default function StandingTable(props) {
  if (props.items != null && props.items.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th className="teamName">Team</th>
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
              <td className="teamName">
                <Link to={'/team/'+row.teamId} > 
                {row.teamName}
                </Link>
              </td>
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
  } else {
    return null;
  }
}
