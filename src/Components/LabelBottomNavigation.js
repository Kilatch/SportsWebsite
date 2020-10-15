import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';


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
});

export default function LabelBottomNavigation({funk}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
  //  setValue(newValue);
    console.log(newValue)
  };

  return (
    <BottomNavigation value={value} onChange={(event,newValue)=>funk(event,newValue)} className={classes.root}>
      <BottomNavigationAction  label="Old Seasons" value="recents" icon={<RestoreIcon />} />
     
    </BottomNavigation>
  );
}