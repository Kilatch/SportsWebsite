import React, { useState, useEffect } from 'react'
import Table from './StandingTable'
import api from './api'

export default class LoadTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      seasonId: this.props.seasonId,
    }
    this.updateComponent = this.updateComponent.bind(this)
  }

  componentDidMount() {
    if(this.props.seasonId!=0){
      this.updateComponent()
    }
  }


  updateComponent() {
    api.getTableBySeasonId(this.props.seasonId).then(
      (res) => {
        this.setState({
          isLoaded: true,
          items: res.data,
          seasonId:this.props.seasonId
        })
        console.log(this.state.items)
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
   render(){

    if (this.props.seasonId!=this.state.seasonId) {
      this.updateComponent()
    }
    if (this.props.seasonId==this.state.seasonId) {
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