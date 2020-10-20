import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';


export default function DateP({dates,dateHandler}) {
  // The first commit of Material-UI

  function formateDate(date){
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate()
  let d=year+"-"+month+"-"+day;
  return d;
  }

  function disableWeekends(date) {
    let d=formateDate(date)
  
   
    return  !dates.includes(d)
  }
  const handleEffectiveDateChange = (date) => {
    if (date) {
     dateHandler(formateDate(date))
    } else {
     console.log('date was not selected')
    }
  }
  
  

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <DatePicker   onChange={ handleEffectiveDateChange} shouldDisableDate={disableWeekends} />

    </MuiPickersUtilsProvider>
  );
}
