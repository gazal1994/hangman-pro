//import React from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components.js/Solution';
import Score from './components.js/Score';
import Letters from './components.js/Letters';
import EndGame from './components.js/EndGame';
import React, { Component } from 'react';

class App extends Component {

constructor(){
  super()
  this.state={
    letterStatus :this.generateLetterStatuses(),
    solution : {word:"ABCDE",hint:"ABCDE"},
    score:0,
    isEnd:false
  }
  
}
generateLetterStatuses() {
  let letterStatus = {}
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false
  }
  
  return letterStatus
}

trueIt = l => {
  let makeTrue =this.state.letterStatus
  let check =this.state.solution.word.split("").find((q => q === l))
  // if(check==l){
  //   makeTrue [check]=true
  // }
  makeTrue [l]=true
  this.setState({
    letterStatus :makeTrue
  })
}
updatScore= l =>{
  let updatS 
  if(this.state.letterStatus[l]==true){
     updatS =this.state.score + (100/this.state.solution.word.length)
  }else{
    updatS =this.state.score -10
  }
    this.setState({
      score :updatS
    })
}
endGame=()=>{
  let c=0
  let flag 
  let arry=this.state.letterStatus
  for(let i in arry){
   if (arry[i]==true){
     c++
   }
   if(c==this.state.solution.word.length){
     flag=true
   }
  }
  this.setState({
    isEnd : flag
  })
}

render() {
 
    return (
      <div>
       <Solution  letterStatus={this.state.letterStatus} solution ={this.state.solution} />
        <Score score={this.state.score}  updatScore={this.updatScore}/> 
        <Letters  letterStatus={this.state.letterStatus}  trueIt={this.trueIt}  updatScore={this.updatScore} endGame={this.endGame} />
        <EndGame  score={this.state.score} isEnd={this.state.isEnd} word={this.state.solution.word}/>
       </div>
    );
  }
}


export default App;

