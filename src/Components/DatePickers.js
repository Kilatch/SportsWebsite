import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles({
  b: {
    color: ' #ffff',
    '&:hover': {
      backgroundColor: '#b0bec5',
    },
  },
})

export default function DateP({ dates, dateHandler }) {
  const classes = useStyles()
  // The first commit of Material-UI
  const [state, setState] = useState({
    datum: new Date(),
    started: false,
  })

  function formateDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let d = year + '-' + month + '-' + day
    return d
  }

  function disableWeekends(date) {
    let d = formateDate(date)
    return !dates.includes(d)
  }

  const handleEffectiveDateChange = (date) => {
    if (formateDate(date) !== dates[dates.length] && !state.started) {
      dateHandler(formateDate(date))
      setState({
        datum: date,
        started: true,
      })
    } else if (date && state.started) {
      dateHandler(formateDate(date))
      setState({
        datum: date,
      })
    } else {
      console.log('date was not selected')
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.b}
        autoOk={true}
        variant="inline"
        inputVariant="outlined"
        format="yyyy-MM-dd"
        leftArrowIcon={<KeyboardArrowLeft />}
        rightArrowIcon={<KeyboardArrowRight />}
        InputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
        value={state.datum}
        onChange={handleEffectiveDateChange}
        InputAdornmentProps={{ position: 'start' }}
        shouldDisableDate={disableWeekends}
      />
    </MuiPickersUtilsProvider>
  )
}
