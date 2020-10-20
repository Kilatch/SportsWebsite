import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Block, CenterFocusStrong, FullscreenExit } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  root: {
    width: 380,
    minHeight: 250,
    backgroundImage: "Components/sport.jpg",
    border: 3,
    borderRadius: 8,
    padding: '0 30px',
    marginLeft: "25px",
    marginTop: "25px",
    backgroundColor: "#b69896"


  },
  league: {
    color: '#e3f2fd',
    align: 'center',
    margin: 8
  }
  ,
  team: {
    color: '#212121',
    align: 'center',
    display: 'flex',

  },
  score: {
    color: '#800000',
  }
});



export default function CardObj({d,getMatchTwo}) {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <div>
            <Typography variant="h6" className={classes.team} component="p" noWrap>
              {d.homeTeam.name}
            </Typography>
            <Typography variant="h6" className={classes.score} component="p" noWrap>
              {d.result.homeScore}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" className={classes.team} component="p" noWrap>
              {d.awayTeam.name}
            </Typography>
            <Typography variant="h6" className={classes.score} component="p" noWrap>
              {d.result.awayScore}
            </Typography>
          </div>
          <Typography variant="caption" display="block" gutterBottom className={classes.league} >
            {d.round.season.league.sport.name + "-" + d.round.season.league.name + " " + d.round.season.startYear}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom className={classes.league} >
            {d.date}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  onClick = {()=>getMatchTwo(d.awayTeam.id,d.homeTeam.id)} size="small">
 
          More Matches
        </Button>
      </CardActions>
    </Card>
  );

}