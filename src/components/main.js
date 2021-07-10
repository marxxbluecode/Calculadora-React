import React, {useState} from 'react'

export default function App() {
    
    const [valorTela,setValorTela]=useState('')
    const [resultado,setResultado]=useState(0)
    const [acumulador,setAcumulador]=useState(0)
    const [operacao,setOperacao]=useState(false)

    const Tela =(valor,res) => {
        return(
            <div>
                <span>{valor}</span>
                <span>{res}</span>
            </div>
        )
    }

    
    const Number_digit = (d) => {
        if((d=='+' || d=='-'|| d=='*' || d=='/') && operado){
            console.log("+-*/")
            setOperado(false)
            setValorTela(resultado+d)
            return
        }
        if(operado){
            setValorTela(d)
            setOperado(false)
            return
        }
        const valorDigitadonaTela = valorTela+d
        setValorTela(valorDigitadonaTela)
      }
      const limparMemoria = () => {
          setOperado(false)
          setValorTela('')
          setResultado(0)
          setAcumulador(0)
          return
      }
      const Operacao = (oper) =>{
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

    return(
        <>
        <div>
            <h3>Calculadora</h3>
            {Tela(valorTela,resultado)}
            <div>
                {Btn}
            </div>
        </div>
        </>

    );
}