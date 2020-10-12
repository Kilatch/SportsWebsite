import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from './api'
import './Sports.css'
function Sports() {
  const [sports, setSports] = useState([])

  useEffect(() => {
    axios
      .get('http://grupp5test.jls-sto1.elastx.net/get/sports')
      .then((data) => setSports(data.data))
  })
  return (
    <div className="card-container">
      {sports.map((data, index) => (
        <h1 key={index}>{data.name}</h1>
      ))}
    </div>
  )
}
export default Sports
