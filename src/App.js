import React, { Component } from 'react'
import styled from "styled-components"
import background from "./Images/windowsXP.png"
import icon from "./Images/light.png"

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
`;
const Container = styled.div`
    width: 364px;
    height: 666px;
    border-radius: 5px;
    background-color: white;
    -webkit-box-shadow: 2px 2px 7px 12px rgba(46,46,46,0.17);
    -moz-box-shadow: 2px 2px 7px 12px rgba(46,46,46,0.17);
    box-shadow: 2px 2px 7px 12px rgba(46,46,46,0.17);
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    height: 3.5%;
`
const Title = styled.p`
    display: inline;
    font-size: 1rem;
    color: white;
`;
const Box_Title = styled.div`
     text-align: center;
     width: 80px;
     height: 100%;
     padding: 0.5% 3% 1%;
     border-radius: 15%/50% ;
     background-color:#4f79dc;
`;
 const Line = styled.span`
    background-color: #ececec;
    width: 300px;
    margin: 0.5rem;
    outline: none;
`;
const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5%;
`;
const Button = styled.button`
    width: 64px;
    height: 64px;
    font-size: 28px;
    color: white;
    border-radius: 100%;
    border: none;
    margin: 0.5rem;
    background-color: #d2d2d2;
    cursor: pointer;
`;
const Btn_op = styled.button`
    width: 64px;
    height: 64px;
    font-size: 30px;
    color: white;
    border-radius: 100%;
    border: none;
    margin: 0.5rem;
    background-color: #b9d6e3;
    cursor: pointer;  
`;
const Btn_number = styled.button`
    width: 64px;
    height: 64px;
    font-size: 30px;
    color: #707070;
    border-radius: 100%;
    border: none;
    margin: 0.5rem;
    background-color: transparent;
    cursor: pointer;
`;
const Btn_equal = styled.button`
    width: 64px;
    height: 64px;
    font-size: 30px;
    color: white;
    border-radius: 100%;
    border: none;
    margin: 0.5rem;
    background-color: #4f79dc;
    cursor: pointer;
`;
const Result = styled.h2`
    color: #707070;
    font-size: 2.2rem;
    font-weight: ;
    text-align: end;
    margin-right: 0.5rem;
`;
const Calc_box = styled.section`
    width:100%;
    height:170px;
    background-color: #ececec;
`;
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
  Aclear = () => {
    this.setState({
      n1: '',
      n2: '',
      res: ''
    });
  };
  clear = () => {
    this.setState({
      res: '0'
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
  percentage = () => {
    this.setState({
     res: (this.state.n1 / 100) 
    });
  };
  

  render(){
    return(
      <Body>
      <Container>
        <Header>
        <Box_Title>
        <Title>Calculator</Title>
        </Box_Title>
        <img src={icon}/>
        </Header>
        <Calc_box>
        <Line value={this.state.n1} onChange = {this.handleChange}></Line>
        <Line value={this.state.n2} onChange = {this.handleChange2}></Line>
        <Result>{this.state.res}</Result>
        </Calc_box>
        <Box>
        <Button  onClick = {this.Aclear}>AC</Button>
        <Button  onClick = {this.clear}>C</Button>
        <Button onClick = {this.percentage}>+/-</Button>
        <Button onClick = {this.percentage}>%</Button>
        <Btn_number onClick = {this.add}>7</Btn_number>
        <Btn_number onClick = {this.remove}>8</Btn_number>
        <Btn_number onClick = {this.multi}>9</Btn_number>
        <Btn_op onClick = {this.divide}>÷</Btn_op>
        <Btn_number onClick = {this.add}>4</Btn_number>
        <Btn_number onClick = {this.remove}>5</Btn_number>
        <Btn_number onClick = {this.multi}>6</Btn_number>
        <Btn_op onClick = {this.multi}>x</Btn_op>
        <Btn_number onClick = {this.add}>1</Btn_number>
        <Btn_number onClick = {this.remove}>2</Btn_number>
        <Btn_number onClick = {this.multi}>3</Btn_number>
        <Btn_op onClick = {this.remove}>-</Btn_op>
        <Btn_number onClick = {this.add}>0</Btn_number>
        <Btn_number onClick = {this.remove}>,</Btn_number>
        <Btn_equal onClick = {this.multi}>=</Btn_equal>
        <Btn_op onClick = {this.add}>+</Btn_op>
        </Box>
      </Container>
      </Body>
    )
}
}
export default app