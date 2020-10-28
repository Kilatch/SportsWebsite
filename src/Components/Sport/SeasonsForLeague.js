/**
 *@author @huseinmb91
 */
import React, { Component } from 'react'
import api from '../api'
import '../styles/SportLeagueList.css'
import LoadTable from '../LoadTable'
import { Link } from 'react-router-dom'

export default class SeasonsForLeague extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagueId: props.leagueId,
      error: null,
      items: [],
    }
    this.updateComponent = this.updateComponent.bind(this)
    this.sortData = this.sortData.bind(this)
  }
  sortData() {
    this.state.items.sort(function (a, b) {
      return b.startYear - a.startYear
    })
  }
  componentDidMount() {
    this.updateComponent()
  }

  updateComponent() {
    api.getSeasonsByLeague(this.props.leagueId).then(
      (res) => {
        this.setState({
          items: res.data,
          leagueId: this.props.leagueId,
        })
    

        
        
        console.log(this.state.items)
      },
      (error) => {
        this.setState({
          error,
        })
      }
    )
  }

  render() {
    if (this.props.leagueId != this.state.leagueId) {
      this.updateComponent()
    }
    if (this.state.items.length > 0) {
      this.sortData()
      let season = this.state.items[0]
      return (
        <div>
          <h3 className="league-list"> {season.league.name} </h3>
          <Link to={"/season/" + season.id} >
            <h4 className="season-year"> {season.startYear}</h4>
          </Link>
          <LoadTable seasonId={season.id} />
        </div>
      )
    } else return null
  }
}
