import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    state = {  }
    render() { 
      
        return (
             
            <div>    
             hint: {this.props.solution.hint}  :
               {this.props.solution.word.split("").map(m=><Letter letter={this.props.letterStatus[m]? m :"_"}/>)}
              </div>
          );
    }
}
 
export default Solution;