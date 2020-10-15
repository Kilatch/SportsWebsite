import React, { useState, useEffect} from 'react'
import Table from './StandingTable'

export default function LoadTable(props) {

  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    props.getData().then(res => {
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
