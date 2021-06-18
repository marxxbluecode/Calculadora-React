import React, { Component } from 'react'
import './App.css';

class app extends Component{
 
  state = {
    n1: null,
    n2: null,
    res: null
  }

  batata = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  batata_doce = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  clean = () => {
    this.setState({
      n1: '',
      n2: '',
      res: ''
    });
  };

 add = () => {
    this.setState({
      res: this.state.n1 + this.state.n2,
    });
  };
  remove = () => {
    this.setState({
     res: this.state.n1 - this.state.n2
    });
  };
  multi = () => {
    this.setState({
     res: this.state.n1 * this.state.n2
    });
  };
  divide = () => {
    this.setState({
     res: this.state.n1 / this.state.n2
    });
  };

  render(){
    return(
      <div>
        <h1>Calculator 2000</h1>
        <input className='inpt' onChange = {this.batata}></input>
        <input className='inpt' onChange = {this.batata_doce}></input>
        <div className='box-btn'>
        <button onClick = {this.add}>+</button>
        <button onClick = {this.remove}>-</button>
        <button onClick = {this.multi}>x</button>
        <button onClick = {this.divide}>/</button>
        <button className='clean' onClick = {this.clean}>Limpar</button>
        </div>
        <h2>{this.state.res}</h2>
      </div>
    )
}
}
export default app