import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Typography } from '@material-ui/core/';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from "@material-ui/core/styles";
import AlertDialogOnDBchange from './AlertDialogOnDBchange';
import api from './api'

const styles = theme => ({

  txt: {
    color: "#a83432",
    textAlign: 'center',
    fontStyle: 'italic',

  },
  saveBtn: {
    color: "#f5eded",
  },

});


class AddLeagueForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: {
        leagueName: '',
        sportName: '',
      },

      submitted: false,
      savedMessage: '',
      sportList: props.data,

    }
    this.handleDialog = this.handleDialog.bind(this);
    this.addLeagueToApi = this.addLeagueToApi.bind(this);
    this. getSportId = this. getSportId.bind(this);
  }
  getSportId(spName){
    let spId;
    for(let i=0;i<this.state.sportList.length;i++){
      let sp=this.state.sportList[i];
      if (sp.name==spName) spId=sp.id
    }
    return spId
  }

  addLeagueToApi(leagueN, sportId) {
    api.addNewLeague(leagueN, sportId)
      .then(res => {
        this.setState({
          savedMessage:  'The League was successfully added to the database',
        })
      })
      .catch(error => {
        this.setState({
          savedMessage: 'Something went wrong while saving to the database!!',
        })
        console.log(error)
      })

  }


  handleDialog(saveOk) {
    console.log(saveOk)
    if (saveOk == 1) {
     // this.addLeagueToApi(this.state.formData.leagueName,this.getSportId(this.state.formData.sportName))
     
      console.log('submited sport Id ' + this.getSportId(this.state.formData.sportName))
      console.log('submited league name :' + this.state.formData.leagueName)
    }
    this.setState({ submitted: false })

  }
  componentDidMount() {

    ValidatorForm.addValidationRule('isText', (value) => {
      var letters = /^[A-Za-z]+$/;
      var character = value.charAt(0);
      if (value.match(letters) && character == character.toUpperCase()) {
        return true;
      }
      return false;
    });
    ValidatorForm.addValidationRule('sportDoesNotExist', (value) => {
      for(let i=0;i<this.state.sportList.length;i++){
        let sp=this.state.sportList[i];
        if (sp.name==value)return true
      }
      return false;
    });

  

  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    /*
    //console.log(this.state.formData)
    //console.log(this.state.sportList.length) 
    //console.log(Object.keys(this.state.sportList).length);
    let notExistsSimilarName=true
    for(let i=0;i<this.state.sportList.length;i++){
     let sp=this.state.sportList[i];
    // console.log('sp'+sp.name)
     //console.log('form'+this.state.formData.sportName)
     //sporNameisMoreFriendly
      if(sp.name==this.state.formData.sportName){
        notExistsSimilarName=false
        this.setState({ 
          savedMessage: 'Similar Sport Name Already Exists in The Database And This Might Create confussion!'
        });
      }
    }
    if(notExistsSimilarName){
      this.setState({ 
        submitted: notExistsSimilarName ,
        savedMessage:''
      });
    }*/
    this.setState({
      submitted: true,
      savedMessage: ''
    });


  }

  render() {
    const { formData, submitted } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.txt} >{this.state.savedMessage}</Typography>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          className={classes.root}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginLeft="10%"
            p={1}
            m={1}
          >
            <Box p={1}  >
              <TextValidator
                label="League Name"
                onChange={this.handleChange}
                className={classes.textVal}
                name="leagueName"
                value={formData.leagueName}
                validators={['required', 'isText']}
                errorMessages={['this field is required', 'LeagueName is Not valid']}
              />
            </Box>
            <Box p={1}  >
              <TextValidator
                label="Sport Name"
                onChange={this.handleChange}
                className={classes.textVal}
                name="sportName"
                value={formData.sportName}
                validators={['required', 'sportDoesNotExist']}
                errorMessages={['this field is required', 'sportName does not exist/invalid name']}
              />
            </Box>
            <Box p={1} >
              <Button
                className={classes.saveBtn}
                variant="contained"
                type="submit"
                disabled={submitted}
              >
                {
                  (submitted && <div><SaveIcon color="primary" /> <AlertDialogOnDBchange op={true} handleDialog={this.handleDialog} /></div>)
                  || (!submitted && <SaveIcon color="secondary" />)
                }
              </Button>
            </Box>
          </Box>

        </ValidatorForm>

      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddLeagueForm);