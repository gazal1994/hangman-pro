import React, { Component } from 'react';

class Score extends Component {
    state = {  }
   
    
    render() { 
     
        return ( 
           <div>
               this score is :
              <div className={this.props.score>=80 ?"high-score" :this.props.score>=50 ?"medium-score":"low-score"} > {this.props.score}</div> 
         </div>
         );
    }
}
 
export default Score;