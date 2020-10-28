import React, { Component } from 'react'
import api from './api'
import DataHantering from './DataHantering'
import CardObj from './CardObj'
import './general.css'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
import SimpleMenu from './SimpleMenu'
import DateP from './DatePickers'

export default class Matches extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      items: [],
      itemsToShow: [],
      availableSeasons: [],
    }
    this.updateComponent = this.updateComponent.bind(this)
    this.sortData = this.sortData.bind(this)
    this.useStyles = this.useStyles.bind(this)
    this.handelList = this.handelList.bind(this)
    this.dateHandler = this.dateHandler.bind(this)
    this.getMatchTwo = this.getMatchTwo.bind(this)
  }

  useStyles = makeStyles({
    divFilter: {
      backgroundColor: 'rgb(65, 130, 195)',
    },
  })

  componentDidMount() {
    this.updateComponent()
  }

  sortData() {
    this.state.items.sort(function (a, b) {
      return b.round.season.startYear - a.round.season.startYear
    })
  }

  handelList(id) {
    this.setState({
      itemsToShow: DataHantering.getAvailableMatchinSeason(
        this.state.items,
        id
      ),
    })
  }

  dateHandler(date) {
    this.setState({
      itemsToShow: DataHantering.getMatchByDate(date, this.state.items),
    })
  }

  getMatchTwo(id1, id2) {
    this.setState({
      itemsToShow: DataHantering.getMatchesTwo(this.state.items, id1, id2),
    })
  }

  updateComponent() {
    api.getAllAvailabeSeasons().then(
      (res) => {
        this.setState({
          items: res,
        })
        this.sortData()
        this.setState({
          itemsToShow: DataHantering.getMatchFromEveryLeague(this.state.items),
          availableSeasons: DataHantering.getAvailableSeasonIds(
            this.state.items
          ),
        })
      },
      (error) => {
        this.setState({
          error,
        })
      }
    )
  }

  render() {

    if (this.state.items.length > 0) {
      return (
        <div>
          <div className="bar">
            <div className="menu">
              <SimpleMenu handelList={this.handelList} season={'Select season ||'} seasons={this.state.availableSeasons} />
            </div>
            <div className="date">
              <DateP dates={DataHantering.getAllDates(this.state.items)} dateHandler={this.dateHandler} />
            </div>
          </div>

          <Grid item container xs={12}>
            {this.state.itemsToShow.map((data, index) => (
              <div key={index}>
                <CardObj d={data} getMatchTwo={this.getMatchTwo} />
              </div>
            ))}
          </Grid>
        </div>
      )
    } else return (
      <Button>Hej</Button>
    )
  }
}
