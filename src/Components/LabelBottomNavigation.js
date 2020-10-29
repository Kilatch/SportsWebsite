import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #91959c 30%, #ea3a3a 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

export default function LabelBottomNavigation({ updateSeason }) {
  const classes = useStyles()
  const [value, setValue] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
    updateSeason(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      className={classes.root}
    >
      <Tooltip title="Previous Season">
        <BottomNavigationAction
          label="backward"
          value={0}
          icon={<ArrowBackIosIcon />}
        />
      </Tooltip>
      <Tooltip title="Next Season">
        <BottomNavigationAction
          label="forward"
          value={1}
          icon={<ArrowForwardIosIcon />}
        />
      </Tooltip>
    </BottomNavigation>
  )
}
