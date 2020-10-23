import React from "react";
import { Grid, Box, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Teamf from './teamf.jpg'
import TeamS from './teamfirst.png'
import Sp from './road.jpg'
import { blue, lightBlue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Sp})`,
    border: 0,
    borderRadius: 20,
    boxShadow: '7 8px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '3 10px',
    width: 350,
    minHeight: 180,
    marginLeft: 25,
    marginTop: 25
  },
  teamscore: {
    display: "flex",
    width: 350,
    border: 6,
    height: 38

  },
  matchDateAndLeague: {
    display: "flex",
    width: 350,
    border: 6,
    height: 38

  },
  teamBox: {

    flexGrow: 1,
    color: "#dfe8e1",
    marginLeft: 30,
    marginTop: 6,

  },

  matchDateBox: {
    flexGrow: 1,
    color: "#ebfafa",
    marginLeft: 150,
    marginTop: 10,
  },
  date: {

    fontFamily: 'Raleway',
    fontWeight: lightBlue,
    fontStyle: "italic",
    fontSize: 10,

  },
  team: {
    fontFamily: 'Raleway',
    fontWeight: "bold",
    fontSize: 20,
  },
  score: {
    fontFamily: 'Raleway',
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 28,

  },
  leagueTxt: {
    fontFamily: 'Raleway',
    fontSize: 18,
    color: blue,
    alignSelf: 'center'

  },
  scoreBox: {
    color: "#ed7a53",
    marginRight: 20

  },
  leagueBox: {

    background: '#b3b3b3',

  },

});



export default function CardObj({ d, getMatchTwo }) {
  const classes = useStyles();

  return (


    <Grid container directin="column" className={classes.root}>


      <Box flexDirection="row" className={classes.teamscore}>
        <Avatar alt="src" src={Teamf}></Avatar>
        <Box className={classes.teamBox}>
          <a href={"/team/" + d.homeTeam.id} className={classes.team}>{d.homeTeam.name}</a>
        </Box>

        <Box className={classes.scoreBox}>
          <Typography className={classes.score}>{d.result.homeScore}</Typography>
        </Box>
      </Box>
      <Box flexDirection="row" className={classes.teamscore}>
        <Avatar alt="src" src={TeamS}></Avatar>
        <Box className={classes.teamBox}>
          <a href={"/team/" + d.awayTeam.id} className={classes.team}>{d.awayTeam.name}</a>
        </Box>

        <Box className={classes.scoreBox}>
          <Typography className={classes.score}>{d.result.awayScore}</Typography>
        </Box>
      </Box>
      <Box flexDirection="column" className={classes.matchDateAndLeague}>

        <Box className={classes.matchDateBox}>
          <Typography className={classes.date}>{d.date}</Typography>
        </Box>

        <Box className={classes.leagueBox}>
          <Typography className={classes.leagueTxt}>
            {d.round.season.league.sport.name + "-" + d.round.season.league.name + " " + d.round.season.startYear}
          </Typography>
        </Box>
      </Box>
      <Box>
        <ExpandMoreIcon onClick={() => getMatchTwo(d.awayTeam.id, d.homeTeam.id)} />
      </Box>


    </Grid>
  );

}