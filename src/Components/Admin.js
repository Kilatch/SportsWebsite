import { Box } from '@material-ui/core'
import React from 'react'
import AdminMenu from './AdminMenu'
import AddSportForm from './AddSportForm'
import AddLeagueForm from './AddLeagueForm'
import { withStyles } from '@material-ui/core/styles'
import api from './api'
import './Admin.css'

const styles = (theme) => ({
  root: {
    alignItems: 'center',
    p: 1,
    m: 1,
    marginRight: '10%',
    marginTop: '25px',
    backgroundColor: '#000008',
    boxShadow:
      'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    //backgroundImage: `url(${FormBackground})`,
    width: '100%',
    //borderRadius : 25,
  },
  adminP: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 0,
    p: 1,
    m: 1,
  },

  dii: {
    backgroundColor: 'rgb(65, 130, 195)',
    display: 'flex',
  },

  diii: {
    marginLeft: '50%',
  },

  diiiiii: {
    marginTop: '250px',
  },
})

class Admin extends React.Component {
  constructor() {
    super()
    this.state = {
      error: null,
      addTask: 0,
      sports: [],
    }

    this.handelList = this.handelList.bind(this)
  }
  componentDidMount() {
    api
      .getSports()
      .then((res) => {
        this.setState({
          sports: res.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  handelList(addType) {
    this.setState({
      addTask: addType,
    })
    console.log(addType)
  }

  render() {
    const { classes } = this.props
    const id = this.state.addTask
    return (
      <div className="admin-container">
        <div className="admin-nav">
          <div className="admin-nav-children">
            <AdminMenu handelList={this.handelList} />
          </div>
        </div>

        <div className="admin-body">
          {(id === 0 && <AddSportForm data={this.state.sports} />) ||
            (id === 1 && <AddLeagueForm data={this.state.sports} />)}
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Admin)
