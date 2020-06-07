import React, { Component } from 'react';
import Letter from './Letter';

class Letters  extends Component {
    state = {  }
    render() { 

        return ( 
       <div>
        <span>  {Object.keys( this.props.letterStatus).map((l,k) => <Letter key={k} className={this.props.letterStatus[l]? "true" :"false"} letter={l} trueIt={this.props.trueIt} endGame={this.props.endGame}  updatScore={this.props.updatScore}/>) } </span>
        </div>
         );
      
    }
}
 
export default Letters ;