import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;

console.log(DateFnsUtils.prototype);

const useStyles = makeStyles({
  grid: {
    width: '60%',
  },
});

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Date picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        {/*<KeyboardTimePicker*/}
        {/*  margin="normal"*/}
        {/*  id="mui-pickers-time"*/}
        {/*  label="Time picker"*/}
        {/*  value={selectedDate}*/}
        {/*  onChange={handleDateChange}*/}
        {/*  KeyboardButtonProps={{*/}
        {/*    'aria-label': 'change time',*/}
        {/*  }}*/}
        {/*/>*/}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}