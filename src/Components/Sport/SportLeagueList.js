/**
 *@author @huseinmb91
 */

import React, { Component } from 'react'
import api from '../api'
import '../styles/SportLeagueList.css'
import SeasonsForLeague from './SeasonsForLeague'

export default class SportLeagueList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sportId: props.sportId,
      error: null,
      items: [],
      tempBool: 0,
    }
    this.updateComponent = this.updateComponent.bind(this)
  }

  componentDidMount() {
    if (this.props.sportId !== 0) {
      this.updateComponent()
    }
  }

  updateComponent() {
    api.getLeagueBySport(this.props.sportId).then(
      (res) => {
        this.setState({
          items: res.data,
          sportId: this.props.sportId,
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
    if (this.props.sportId !== this.state.sportId) {
      this.updateComponent()
    }
    if (this.state.items.length > 0) {
      return (
        <div>
          <ul className="league-list">
            {this.state.items.map((data, index) => (
              <div key={index}>
                <SeasonsForLeague leagueId={data.id} />
              </div>
            ))}
          </ul>
        </div>
      )
    } else return <div className="no-content">Nothing played yet</div>
  }
}
