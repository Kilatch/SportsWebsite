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
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: "#f7f7fa",
    height: "10%",

  },
  root: {

    backgroundColor: "#f7f7fa",
    borderRadius: 15,
    width: "40%",
    marginLeft: "35%",
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',

  },
  saveBtn: {
    color: "#f5eded",
  },
  rule: {
    color: "#fafafa",
    marginLeft: "20%",
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
      felMedelandeSport: '',
      felMedelandeLeague: '',

    }
    this.handleDialog = this.handleDialog.bind(this);
    this.addLeagueToApi = this.addLeagueToApi.bind(this);
    this.getSportId = this.getSportId.bind(this);
    this.sportExists = this.sportExists.bind(this);
  }
  getSportId(spName) {
    let spId;
    for (let i = 0; i < this.state.sportList.length; i++) {
      let sp = this.state.sportList[i];
      if (sp.name == spName) spId = sp.id
    }
    return spId
  }

  addLeagueToApi(leagueN, sportId) {
    api.addNewLeague(leagueN, sportId)
      .then(res => {
        this.setState({
          savedMessage: 'The League was successfully added to the database',
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
    var letters = /^[A-Za-z]+$/;
    ValidatorForm.addValidationRule('isText', (value) => {
      var character = value.charAt(0);

      if (value.length == 0) {
        this.setState({ felMedelandeLeague: 'the field is reqiured' })
        return false;
      }
      if (!value.match(letters)) {
        this.setState({ felMedelandeLeague: 'only letters are valid' })
        return false;
      }
      if (character != character.toUpperCase()) {
        this.setState({ felMedelandeLeague: 'First letter should be upperCase' })
        return false;
      }
      return true
    });
    ValidatorForm.addValidationRule('sportDoesNotExist', (value) => {
      var character = value.charAt(0);
      if (value.length == 0) {
        this.setState({ felMedelandeSport: 'the field is reqiured' })
        return false;
      }
      if (!value.match(letters)) {
        this.setState({ felMedelandeSport: 'only letters are valid' })
        return false;
      }
      if (character != character.toUpperCase()) {
        this.setState({ felMedelandeSport: 'First letter should be upperCase' })
        return false;
      }
      if (!this.sportExists(value)) {
        this.setState({ felMedelandeSport: 'The Sport Does Not Exist' })
        return false;
      }


      return true
    });



  }
  sportExists(value) {
    for (let i = 0; i < this.state.sportList.length; i++) {
      let sp = this.state.sportList[i];
      if (sp.name == value) return true
    }
  }
  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData, felMedelande: '' });
  }

  handleSubmit = () => {
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
              <Box p={1} className={classes.txt} >
                <TextValidator
                  label="League Name"
                  onChange={this.handleChange}
                  className={classes.textVal}
                  name="leagueName"
                  value={formData.leagueName}
                  validators={['required', 'isText']}
                  errorMessages={['this field is required', this.state.felMedelandeLeague]}
                />
              </Box>
              <Box p={1} className={classes.txt}  >
                <TextValidator
                  label="Sport Name"
                  onChange={this.handleChange}
                  className={classes.textVal}
                  name="sportName"
                  value={formData.sportName}
                  validators={['required', 'sportDoesNotExist']}
                  errorMessages={['this field is required', this.state.felMedelandeSport]}
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

      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddLeagueForm);