/**
 *@author @huseinmb91
 */
import React, { Component } from 'react'
import api from '../api'
import '../styles/SportLeagueList.css'
import LoadTable from '../LoadTable'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import LoadBottomNav from '../LabelBottomNavigation'

export default class SeasonsForLeague extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagueId: props.leagueId,
      error: null,
      items: [],
      seasonToShow: null,
      index: 0,
    }
    this.updateComponent = this.updateComponent.bind(this)
    this.sortData = this.sortData.bind(this)
    this.updateSeason = this.updateSeason.bind(this)
  }
  sortData() {
    this.state.items.sort(function (a, b) {
      return b.startYear - a.startYear
    })
  }
  componentDidMount() {
    this.updateComponent()
  }
  updateSeason(value) {
    let len = this.state.items.length
    if (value == 0 && this.state.index < len) {
      this.setState({
        index: this.state.index + 1,
        seasonToShow: this.state.items[this.state.index + 1],
      })
    } else if (value == 1 && this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
        seasonToShow: this.state.items[this.state.index - 1],
      })
    }
    console.log(value)
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
      let season
      if (this.state.seasonToShow == null) season = this.state.items[0]
      else {
        season = this.state.seasonToShow
      }
      return (
        <div>
          <h3 className="league-list"> {season.league.name} </h3>
          <Link to={'/season/' + season.id}>
            <h4 className="season-year"> {season.startYear}</h4>
          </Link>

          <LoadTable seasonId={season.id} />
          <LoadBottomNav updateSeason={this.updateSeason} />
        </div>
      )
    } else return null
  }
}
