import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Open Sans',
    fontSize: 20,
    justifyContent: 'center',
    height: 100,
    width: 100,
    textAlign: 'center',
  },
}))

const Card = ({ name, id }) => {
  const classes = useStyles()
  return (
    <Grid item>
      <Paper elevation={3} className={classes.paper}>
        <p>{name}</p>
      </Paper>
    </Grid>
  )
}

export default Card
