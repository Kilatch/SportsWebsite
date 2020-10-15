import React, { useState, useEffect} from 'react'
import api from './api'
import Table from './StandingTable'

export default function LoadSeasonTable(props) {

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    api.getTableBySeasonId(props.id).then(res => {
      setState({
        isLoaded: true,
        items: res.data
      })
    }, error => {
      setState({
        isLoaded: true,
        error: error,
        items: []
      })
    })
    // eslint-disable-next-line
  }, [])

  const { error, isLoaded, items } = state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Table items={items} />
    );
  }
}
