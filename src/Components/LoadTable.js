import React, { useState, useEffect } from 'react'
import Table from './StandingTable'
import api from './api'

export default class LoadTable extends React.Component {
  cachKey = "loadTable:" + this.props.seasonId

  constructor(props) {
    super(props)
    this.state =
      JSON.parse(sessionStorage.getItem(this.cachKey)) ||
      {
        error: null,
        isLoaded: false,
        items: [],
        seasonId: this.props.seasonId,
      }
  }

  componentDidMount() {
    this.updateComponent()
  }

  updateComponent = () => {
    
    if (!this.state.isLoaded || this.props.seasonId != this.state.seasonId) {
      api.getTableBySeasonId(this.props.seasonId).then(
        (res) => {
          let tmp = {...this.state}
          tmp.isLoaded = true
          tmp.items = res.data
          tmp.seasonId = this.props.seasonId
          this.setState(tmp)
          sessionStorage.setItem(this.cachKey, JSON.stringify(tmp))
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
            items: [],
          })
        }
      )
    }
  }
  render() {

    if (this.props.seasonId != this.state.seasonId) {
      this.updateComponent()
    }
    if (this.props.seasonId == this.state.seasonId) {
      return (


        <div>
          {
            (this.state.error && <div>Error: {this.state.error.message}</div>)
            || (!this.state.isLoaded && <div>Loading...</div>)
            || (this.state.isLoaded && <Table items={this.state.items} />)
          }
        </div>


      )
    } else return null
  }
}
