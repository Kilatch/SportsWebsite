/**
 * @author Ali
 */

import React, { useState, useEffect } from 'react'
import SportsNavBar from './SportsNavBar'
import api from '../api'
import SportLeagueList from './SportLeagueList'

const Sports = () => {
  const [sports, setSports] = useState([])
  const [sportID, setSportID] = useState(0)

  const sportClicked = (id) => {
    setSportID(id)
  }

  useEffect(() => {
    api.getSports().then((data) => {
      setSports(data.data)
    })
  }, [])
  return (
    <div>
      <SportsNavBar sports={sports} onClick={sportClicked} />
      <SportLeagueList sportId={sportID} />
    </div>
  )
}
export default Sports
