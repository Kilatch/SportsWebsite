import React from 'react'
import SeasonsForLeague from './Sport/SeasonsForLeague'

const League = ({ match: { params } }) => {
  return <SeasonsForLeague leagueId={params.id} />
}

export default League
