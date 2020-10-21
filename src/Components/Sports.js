import React, { useState, useEffect } from 'react'
import SportsNavBar from './SportsNavBar'
import { getSports } from './api'
const Sports = () => {
  const [sports, setSports] = useState([])

  const sportClicked = (id) => {}

  useEffect(() => {
    getSports().then((data) => {
      setSports(data.data)
    })
  }, [])
  return <SportsNavBar sports={sports} onClick={sportClicked} />
}
export default Sports
