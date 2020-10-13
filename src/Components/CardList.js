import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from './Card'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const CardList = ({ data }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {data.length > 0 && data.map((e) => <Card key={e.id} {...e} />)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardList
