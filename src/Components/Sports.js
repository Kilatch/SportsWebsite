import React from 'react'
import SportsNavBar from './SportsNavBar'
function Sports() {
  const sports = [
    'Football',
    'BasketBall',
    'Cricket',
    'Swimming',
    'Running',
    'Karate',
    'Ice Hockey',
    'Breaking',
    'Fishing',
  ]
  return <SportsNavBar sports={sports} />
}
export default Sports
