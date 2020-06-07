import React, { Component } from 'react';
import Letters from './Letters';

class Letter extends Component {
    state = {  }
   
    chosen= ()=>{
        this.props.trueIt(this.props.letter)   
        this.props.updatScore(this.props.letter)
        this.props.endGame()
    }

    render() { 
        
        return ( 
       <span  onClick={this.chosen}  className={this.props.className}>
           {this.props.letter} </span>   
          
         );
    }
}
 
export default Letter;