import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from './CardList'
import './Sports.css'
function Sports() {
  const [sports, setSports] = useState([])

  useEffect(() => {
    axios
      .get('http://grupp5test.jls-sto1.elastx.net/get/sports')
      .then((data) => setSports(data.data))
  }, [])
  return <CardList data={sports} />
}
export default Sports
