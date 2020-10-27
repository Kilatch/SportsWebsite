import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Table.css'

export default function StandingTable(props) {
  
  const [state, setState] = useState({
    items: props.items
  });

  let sortByName = () => {
    let tmp = (a, b) => {return a.teamName.localeCompare(b.teamName)}
    sort(tmp)
  }
  let sortByPoints = () => {
    let tmp = (a, b) => {return b.points-a.points}
    sort(tmp)
  }
  let sortByGoals = () => {
    let tmp = (a, b) => {return b.goals-a.goals}
    sort(tmp)
  }

  let sortByGoalsConsided = () => {
    let tmp = (a, b) => {return b.goalsConseded-a.goalsConseded}
    sort(tmp)
  }
  let sortByGoalsDiffrens = () => {
    let tmp = (a, b) => {return b.goalDifference-a.goalDifference}
    sort(tmp)
  }
  let sortByLosses = () => {
    let tmp = (a, b) => {return b.loss-a.loss}
    sort(tmp)
  }
  let sortByDraws = () => {
    let tmp = (a, b) => {return b.draws-a.draws}
    sort(tmp)
  }
  let sortByWins = () => {
    let tmp = (a, b) => {return b.wins-a.wins}
    sort(tmp)
  }
  let sortByMatch = () => {
    let tmp = (a, b) => {return b.gamesPlayed-a.gamesPlayed}
    sort(tmp)
  }

  let sort = (fnc) => {
    let table = state.items
    table.sort(fnc)
    setState({
      items: table
    })
  }
  

  if (state.items != null && state.items.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th className="teamName" onClick={sortByName}>Team</th>
            <th onClick={sortByMatch}>MP</th>
            <th onClick={sortByWins}>W</th>
            <th onClick={sortByDraws}>D</th>
            <th onClick={sortByLosses}>L</th>
            <th className='goals' onClick={sortByGoals}>G</th>
            <th className='goals' onClick={sortByGoalsConsided}>GC</th>
            <th className='goals' onClick={sortByGoalsDiffrens}>GD</th>
            <th onClick={sortByPoints}>P</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map(row => (
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
