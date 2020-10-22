import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';


export default function DateP({ dates, dateHandler }) {
  // The first commit of Material-UI
  const [state, setState] = useState({
    datum: new Date(),
    started: false

  });

  function formateDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()
    let d = year + "-" + month + "-" + day;
    return d;
  }

  function disableWeekends(date) {
    let d = formateDate(date)


    return !dates.includes(d)
  }
  const handleEffectiveDateChange = (date) => {
    if (formateDate(date) != '2019-10-27' && !state.started) {
      dateHandler(formateDate(date));
      setState({
        datum: date,
        started: true
      })


    }
    else if (date && state.started) {
      dateHandler(formateDate(date));
      setState({
        datum: date,
      })


    }
    else {
      console.log('date was not selected')
    }
  }



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk={true}
        variant="inline"
        inputVariant="outlined"
        format="yyyy-MM-dd"
        value={state.datum}
        onChange={handleEffectiveDateChange}
        InputAdornmentProps={{ position: "start" }}
        shouldDisableDate={disableWeekends}
      />

    </MuiPickersUtilsProvider>
  );
}