import React from 'react'
import SportsNavBar from './SportsNavBar'

class  Sports extends React.Component {
 
  constructor(){
    super()

    this.state ={
      sportId:2
    }

    this.sportHandler= this.sportHandler.bind(this);
  
    
  }
  sportHandler(sport) {
    let sportHashMap=new Map([
      ['Bandy',1],
      ['Football',2],
      ['Hockey',3],
      ['Handboll',4],
      ['Basket',5],
      ['Cricket',2],
      ['Swimming',2],
      ['Running',2],
      ['Fishing',2],
      
    ]);

    this.setState({sportId: sportHashMap.get(sport)});
    
    
    
  }

  render(){
    const sports = [
      'Football',
      'Basket',
      'Cricket',
      'Swimming',
      'Running',
      'Bandy',
      'Hockey',
      'Handboll',
      'Fishing',
    ]
    return(
     
         <SportsNavBar sports={sports}  sportHandler={this.sportHandler} />
    
     
    )
  }
  
  
}
export default Sports
