<<<<<<< HEAD
import React from "react";
import { Grid, Box, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Teamf from './teamf.jpg'
import TeamS from './teamfirst.png'
import Sp from './road.jpg'
import { blue, lightBlue } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { shadows } from '@material-ui/system'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Block, CenterFocusStrong, FullscreenExit } from '@material-ui/icons';
import sportImage from './s.jpg'
import './general.css'
import { Grid } from '@material-ui/core';
>>>>>>> origin/dev

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
<<<<<<< HEAD
    marginTop: 6,
=======
    marginTop: 30,
    borderRadius : 25,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
>>>>>>> origin/dev

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

<<<<<<< HEAD
  },
  team: {
    fontFamily: 'Raleway',
    fontWeight: "bold",
=======
  scoreCard: {
    color: '#212121',
    marginRight: 20,
    fontFamily: 'Arial',
    fontStyle: " Courier New",
>>>>>>> origin/dev
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

<<<<<<< HEAD
=======
  moreMatch: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginRight : 0,
>>>>>>> origin/dev
  },

});



export default function CardObj({ d, getMatchTwo }) {
  const classes = useStyles();

  return (

<<<<<<< HEAD

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
=======
    <Card className={classes.card} >

      <CardContent>
        <div className={classes.dii}>
          <a href={"/team/" + d.homeTeam.id} className={classes.teamCard}>
            {d.homeTeam.name}
          </a>
          <p className={classes.scoreCard} component="p">
            {d.result.homeScore}
          </p>

        </div>

        <div className={classes.dii}>
          <a href={"/team/" + d.awayTeam.id} className={classes.teamCard}>
            {d.awayTeam.name}
          </a>
          <p className={classes.scoreCard} >
            {d.result.awayScore}
          </p>
        </div>

        <div className={classes.seasonLeague}>
          <p >
            {d.date}

          </p>
          <p>
>>>>>>> origin/dev
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