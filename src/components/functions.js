import React, {Component} from 'react'

class app extends Component{

     state = {
         valorTela: '',
         resultado: 0,
         acumulador: 0,
         operacao: false,
     }
    

    Tela =(valor,res) => {
        return(
            <div>
                <span>{valor}</span>
                <span>{res}</span>
            </div>
        )
    }
    
    
    Number_digit = (d) => {
        this.setState({
            if(d=='+' || d=='-'|| d=='*' || d=='/' || d=='%' && operado){
                console.log("+-*/%")
                operacao: false
                valorTela: resultado+d
            }
            if(operado){
                valorTela: d
                operacao: false
            }
            const valorDigitadonaTela = valorTela+d
            valorTela: valorDigitadonaTela
        })
    };
    Aclear = () => {
        this.setState({

        })
          operacao: false
          valorTela: ''
          resultado: 0
          acumulador: 0
      }
      Operacao = (oper) =>{
          if(oper=='bs'){
              let vtela=valorTela
              vtela=vtela.substring(0,(vtela.length-1))
              setValorTela(vtela)
              setOperado(false)
              return
          }
          try{
              const r=eval(valorTela)
              setAcumulador(r)
              setResultado(r)
              setOperado(true)
          }catch{
              setResultado('ERRO')
          }

      }
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
            <Line value={this.state.n1} onChange = {this.Tela}></Line>
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

}