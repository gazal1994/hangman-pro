import React, { Component } from 'react';


class EndGame extends Component {
    state = {  }
   
    checkEndGame= ()=>{
      this.props.endGame()
    }
     
    render() { 
       
        return ( 
      <div>
           {this.props.score<0?this.props.word:this.props.isEnd?"Congratulations":""}
      </div>  
          
         );
    }
}
 
export default EndGame;