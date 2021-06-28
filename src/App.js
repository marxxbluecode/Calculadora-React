import React, { Component } from 'react'
import styled from "styled-components"
import background from "./Images/windowsXP.jpg"

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #d2d2d2;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 600px;
    border: 2px solid black;
    background-image: url(${background});
`;
const Title = styled.h1`
    font-size: 2rem
`;
 const Input = styled.input`
    background-color: #d2d2d2;
    width: 300px;
    margin: 0.5rem;
    outline: none;
    box-shadow: 6px 6px 1px -3px rgba(0,0,0,0.21);
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`;
const Button = styled.button`
    width: 30px;
    height: 30px;
    margin: 0.5rem;
    background-color: #d2d2d2;
    box-shadow: 6px 6px 1px -3px rgba(0,0,0,0.21);
    cursor: pointer;
`;
const Clean = styled.button`
    width: 120px;
    height: 30px;
    margin: 0.5rem;
    background-color: #d2d2d2;
    box-shadow: 6px 6px 1px -3px rgba(0,0,0,0.21);
    cursor: pointer;
`;
const Result = styled.h2`
    color: black;
    font-size: 2rem;
`
class app extends Component{
 
  state = {
    n1: null,
    n2: null,
    res: null
  }

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  clear = () => {
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
      <Body>
      <Container>
        <Title>Calculator 2000</Title>
        <Input value={this.state.n1} onChange = {this.handleChange}></Input>
        <Input value={this.state.n2} onChange = {this.handleChange2}></Input>
        <Box>
        <Button onClick = {this.add}>+</Button>
        <Button onClick = {this.remove}>-</Button>
        <Button onClick = {this.multi}>x</Button>
        <Button onClick = {this.divide}>/</Button>
        <Clean  onClick = {this.clear}>Limpar</Clean>
        </Box>
        <Result>{this.state.res}</Result>
      </Container>
      </Body>
    )
}
}
export default app