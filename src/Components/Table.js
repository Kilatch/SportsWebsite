/**
 *@author @morganini
 */

import React, { Component } from 'react'
import api from './api'
import MatTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LabelBottomNavigation from './LabelBottomNavigation'



export default class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {
      seasonIndex: 0,
      seasonId: props.seasonId,
      allSeasons: props.allSeasons,
      error: null,
      isLoaded: true,
      items: []
    };
    this.updateComponent = this.updateComponent.bind(this);
    this.getOldSeason = this.getOldSeason.bind(this);

  }
  getOldSeason(event, newValue) {
    if (newValue == 'recents') {
      this.setState(prevState => {
        return {
          seasonIndex: prevState.seasonIndex + 1
        }

      })
      if (this.state.allSeasons[this.state.seasonIndex] != null) {
        let s = this.state.allSeasons[this.state.seasonIndex];
        this.setState({ seasonId: s.id })
      }
      /// console.log(this.state.seasonIndex)
    }

  }

  componentDidMount() {
    this.updateComponent();
  }
  updateComponent() {
    api.getTableBySeasonId(this.props.seasonId).then(res => {
      this.setState({
        items: res.data,
        seasonId: this.props.seasonId,
        isLoaded: true,
        seasonIndex: 0,

      })
      console.log(this.state.items)
    }, error => {
      this.setState({
        error
      })
    })
  }

  render() {
    if (this.props.seasonId != this.state.seasonId) {
      this.updateComponent()
    }
    //  const { error, isLoaded, items } = this.state;
    if (this.state.items.length > 0) {
      return (
        <div>
          <TableContainer component={Paper}>
            <MatTable aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">MP</TableCell>
                  <TableCell align="right">W</TableCell>
                  <TableCell align="right">D</TableCell>
                  <TableCell align="right">L</TableCell>
                  <TableCell align="right">G</TableCell>
                  <TableCell align="right">GC</TableCell>
                  <TableCell align="right">GD</TableCell>
                  <TableCell align="right">P</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  this.state.items.map(row => (
                    <TableRow key={row.temaId}>
                      <TableCell align="right">{row.teamName}</TableCell>
                      <TableCell align="right">{row.gamesPlayed}</TableCell>
                      <TableCell align="right">{row.wins}</TableCell>
                      <TableCell align="right">{row.draws}</TableCell>
                      <TableCell align="right">{row.loss}</TableCell>
                      <TableCell align="right">{row.goals}</TableCell>
                      <TableCell align="right">{row.goalsConseded}</TableCell>
                      <TableCell align="right">{row.goalDifference}</TableCell>
                      <TableCell align="right">{row.points}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </MatTable>
          </TableContainer>
          <LabelBottomNavigation funk={this.getOldSeason} />
        </div>
      )

    } else {
      return null
    }
  }
}