
import React, { Component } from 'react'
import api from './api'
import DataHantering from './DataHantering'
import CardObj from './CardObj'
import './general.css'
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ReactDOM from 'react-dom';
import ControlledOpenSelect from './SimpleMenu'
import SimpleMenu from './SimpleMenu'
import DateP from './DatePickers'
import GridList from '@material-ui/core/GridList'
import CircularProgress from '@material-ui/core/CircularProgress'




export default class Matches extends Component {

    constructor() {
        super()
        this.state = {
            error: null,
            items: [],
            itemsToShow: [],
            availableSeasons: [],



        };
        this.updateComponent = this.updateComponent.bind(this);
        this.sortData = this.sortData.bind(this);
        this.useStyles = this.useStyles.bind(this);
        this.handelList = this.handelList.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.getMatchTwo = this.getMatchTwo.bind(this);

    }

    useStyles = makeStyles((theme) =>
        ({
            grid: {
                width: '100%',
            },
            paper:
            {
                color: theme.palette.text.primary,
                background: theme.palette.success.light,
            },

            filter: {
                width: '100%',
                display: "flex",
                background : "#696969",
                spacing : [0,4]


            },
            gridList: {
                flexDirection:'row',
                flexWrap: 'nowrap',
                width: '100%',
               
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
                length:'50%',
              },
         
        }));


    componentDidMount() {

        this.updateComponent();
    }
    sortData() {
        this.state.items.sort(function (a, b) {
            return b.round.season.startYear - a.round.season.startYear;
        })
    }
    handelList(id) {

        this.setState({
            itemsToShow: DataHantering.getAvailableMatchinSeason(this.state.items, id),


        })

    }
    dateHandler(date) {
        this.setState({
            itemsToShow: DataHantering.getMatchByDate(date, this.state.items)
        })

    }

    getMatchTwo(id1,id2){
        this.setState({
            itemsToShow: DataHantering.getMatchesTwo(this.state.items, id1,id2)
        })
      
      }
    updateComponent() {
        api.getAllAvailabeSeasons().then(res => {
            this.setState({
                items: res,

            })
            this.sortData();
            this.setState({
                itemsToShow: DataHantering.getMatchFromEveryLeague(this.state.items),
                availableSeasons: DataHantering.getAvailableSeasonIds(this.state.items),



            })
            //  console.log(this.state.items)
            //console.log(this.state.availableSeasons)
        }, error => {
            this.setState({
                error
            })
        })
    }

    render() {

        /*if (this.props.sportId != this.state.sportId) {
            this.updateComponent()
        }*/

        if (this.state.items.length > 0) {

            return (
                <div>

                    <div className="dii">
                        <ListItem s>
                        <SimpleMenu   className = {this.useStyles.filter} handelList={this.handelList} season={"Select season"} seasons={this.state.availableSeasons} />
                        <DateP   className = {this.useStyles.filter} dates={DataHantering.getAllDates(this.state.items)} dateHandler={this.dateHandler} />
                        </ListItem>
                    </div>

                    <Grid className={this.useStyles.gridList}>
                        <Grid item container xs={12}>
                            {this.state.itemsToShow.map((data, index) => (
                                <div key={index}>
                                    <CardObj d={data} getMatchTwo = {this.getMatchTwo} />
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            )
        }

        else return <CircularProgress color="secondary" />


    }

}
