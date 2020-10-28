import React, { Component } from 'react'
import api from './api'
import DataHantering from './DataHantering'
import CardObj from './CardObj'
import './general.css'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
import SimpleMenu from './SimpleMenu'
import DateP from './DatePickers'
<<<<<<< HEAD
import CircularProgress from '@material-ui/core/CircularProgress';
import { DesktopWindows } from '@material-ui/icons'
=======
import CircularProgress from '@material-ui/core/CircularProgress'
>>>>>>> origin/dev

export default class Matches extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      items: [],
      itemsToShow: [],
      availableSeasons: [],
      started: false,
      isLoaded: false,
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
    if (this.state.started == true) {
      this.setState({
        itemsToShow: DataHantering.getMatchByDate(date, this.state.items),
      })
    } else {
      this.setState({ started: true })
    }
  }

  getMatchTwo(id1, id2) {
    this.setState({
      itemsToShow: DataHantering.getMatchesTwo(this.state.items, id1, id2),
    })
  }

  updateComponent() {
<<<<<<< HEAD
    if(sessionStorage.getItem('k')!=null){
      console.log('loglll')
      this.setState({
     
        items:JSON.parse(sessionStorage.getItem('k')),
      
        
      })
      this.sortData()
      this.setState({
        isLoaded: true,
        itemsToShow: DataHantering.getMatchFromEveryLeague(JSON.parse(sessionStorage.getItem('k'))),
        availableSeasons: DataHantering.getAvailableSeasonIds(
          this.state.items),
      })
    }
    else{
      api.getAllAvailabeSeasons().then(
        (res) => {
         
          this.setState({
            items: res,
           
          })

          this.sortData()
          this.setState({
            isLoaded: true,
            itemsToShow: DataHantering.getMatchFromEveryLeague(this.state.items),
            availableSeasons: DataHantering.getAvailableSeasonIds(
              this.state.items
            ),
          })
          sessionStorage.setItem('k', JSON.stringify(this.state.items));
          console.log(JSON.parse(sessionStorage.getItem('k')))
        },
        (error) => {
          this.setState({
            error: error
          })
        }
      )
    }
   
=======
    api.getAllAvailabeSeasons().then(
      (res) => {
        this.setState({
          items: res,
        })
        this.sortData()
        this.setState({
          isLoaded: true,
          itemsToShow: DataHantering.getMatchFromEveryLeague(this.state.items),
          availableSeasons: DataHantering.getAvailableSeasonIds(
            this.state.items
          ),
        })
      },
      (error) => {
        this.setState({
          error: error,
        })
      }
    )
>>>>>>> origin/dev
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="progressbar">
          <CircularProgress size={100} />
        </div>
      )
    }
    if (this.state.error) {
      return <div>{this.state.error}</div>
    }

    if (this.state.items.length > 0) {
      return (
        <div>
          <div className="bar">
            <div className="menu">
              <SimpleMenu
                handelList={this.handelList}
                season={'| Select season'}
                seasons={this.state.availableSeasons}
              />
            </div>
            <div className="date">
              <DateP
                dates={DataHantering.getAllDates(this.state.items)}
                dateHandler={this.dateHandler}
              />
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
    } else return null
  }
}
