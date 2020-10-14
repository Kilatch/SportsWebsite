import React, { Component } from 'react'
import api from './api'

export default class Table extends Component{
  
  constructor(props){
    super(props)
  }

  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    api.getSports().then(res => {
      this.setState({
        isLoaded: true,
        items: res.data
      })
    }, error => {
      this.setState({
        isLoaded: true,
        error
      })
    })
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.username}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
