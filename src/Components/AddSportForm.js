import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Box, Typography} from '@material-ui/core/';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from "@material-ui/core/styles";
import AlertDialogOnDBchange from './AlertDialogOnDBchange';
import api from './api'

const styles = theme => ({
 
  txt: {
    color:"#a83432",
    textAlign: 'center',
    fontStyle: 'italic',
    backgroundColor: "#f7f7fa",
    height: "10%",
    borderRadius : 15,


    },
  saveBtn:{
    color:"#f5eded",
  },
  rule:{
    color:"#fafafa",
    marginLeft : "20%",
  },

});


class AddSportForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: {
        sportName: '',
      
      },
      
      submitted: false,
      savedSportNameAndMessage:'',
      sportList:props.data,
      felMedelande:'required'
     
    }
    this.handleDialog = this.handleDialog.bind(this);
    this.addSportToApi = this.addSportToApi.bind(this);

  }

  addSportToApi(SpName) {
    api.AddNewSport(SpName)
    .then(res => {
      this.setState({
        savedSportNameAndMessage: res.data.name+' was successfully added to the database',
    })
    })
    .catch(error=>{
      this.setState({
        savedSportNameAndMessage: 'Something went wrong while saving to the database!!',
    })
      console.log(error)
    })
    
}


  handleDialog(saveOk){
   console.log(saveOk)
   if(saveOk==1){
    // this.addSportToApi(this.state.formData.sportName)
    console.log('sub'+this.state.formData.sportName) 
   }
    this.setState({submitted:false})

  }
  componentDidMount() {

    ValidatorForm.addValidationRule('isText', (value) => {
      var letters = /^[A-Za-z]+$/;
      var character = value.charAt(0);
      if (value.length==0) {
        this.setState({felMedelande:'the field is reqiured'})
        return false;
      }
      if (!value.match(letters) ) {
        this.setState({felMedelande:'only letters are valid'})
        return false;
      }
      if(character != character.toUpperCase()){
        this.setState({felMedelande:'First letter should be upperCase'})
        return false;
      }
      return true
    });


  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    let notExistsSimilarName=true
    for(let i=0;i<this.state.sportList.length;i++){
     let sp=this.state.sportList[i];
      if(sp.name==this.state.formData.sportName){
        notExistsSimilarName=false
        this.setState({ 
          savedSportNameAndMessage: 'Similar Sport Name Already Exists in The Database And This Might Create confussion!'
        });
      }
    }
    if(notExistsSimilarName){
      this.setState({ 
        submitted: notExistsSimilarName ,
        savedSportNameAndMessage:''
      });
    }
   
 
  }

  render() {
    const { formData, submitted } = this.state;
    const { classes } = this.props;
    return (
      <div>
      <div>
        <Typography className={classes.txt} >{this.state.savedSportNameAndMessage}</Typography>
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        className={classes.root}
      >
        <Box          
        display="flex"
        alignItems="center"
        marginLeft="30%"
        p={1}
        m={1}   
    >
      
          <Box p={1} className={classes.txt}>
          <TextValidator
            label="Sport Name"
            onChange={this.handleChange}
            className={classes.textVal}
            name="sportName"
            value={formData.sportName}
            variant="outlined"
            validators={['required', 'isText']}
            errorMessages={['this field is required', this.state.felMedelande]}
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
              (submitted && <div><SaveIcon color="primary"/> <AlertDialogOnDBchange op={true} handleDialog = {this.handleDialog }/></div>)
              || (!submitted && <SaveIcon color="secondary"/>)
              

            }
          </Button>
        </Box>
        </Box>
  
      </ValidatorForm>
        
      </div>
      <Box p={1}  >
          
  </Box>
  </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AddSportForm);