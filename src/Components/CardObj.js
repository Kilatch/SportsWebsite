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

const useStyles = makeStyles({
  root: {
    width: 380,
    minHeight: 250,
    backgroundImage: `url(${sportImage})`,
    border: 3,
    borderRadius: 8,
    padding: '0 30px',
    marginLeft: "25px",
    marginTop: "25px",
    //backgroundColor: "#b69896"


  },
  card: {
    width: 380,
    minHeight: 250,
    backgroundImage: `url(${sportImage})`,
    marginLeft: 30,
    marginTop: 30,
    borderRadius : 25,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },

  teamCard: {
    color: '#212121',
    fontFamily: 'Arial',
    marginLeft: 15,
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,

  },

  scoreCard: {
    color: '#212121',
    marginRight: 20,
    fontFamily: 'Arial',
    fontStyle: " Courier New",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },

  seasonLeague: {

    color: '#e8eaf6',
    marginTop: 50,
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  dii: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  moreMatch: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginRight : 0,
  },

});



export default function CardObj({ d, getMatchTwo }) {
  const classes = useStyles();

  return (

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
            {d.round.season.league.sport.name + "-" + d.round.season.league.name + " " + d.round.season.startYear}
          </p>
        </div>

      </CardContent>

      <Button className={classes.moreMatch} onClick={() => getMatchTwo(d.awayTeam.id, d.homeTeam.id)} >
        More Matches
        </Button>
    </Card>
  );

}

