import './App.css';
import {useState} from 'react';
import Botao from './components/Botao';
import Display from './components/Display';

const App = () => {
  const [numero, setNumero] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [operacao, setOperacao] = useState();

  // numeros digitados
  const numeroDigitado = (e) => {
    setNumero(numero+e.target.innerText);
  }

  // selecionar a operação matemática
  const operacaoMatematica = (e) => {
    setPrimeiroNumero(numero);
    setNumero("");

    if (e.target.innerText === '+') {
      setOperacao("+");
    } else if (e.target.innerText === '-') {
      setOperacao("-");
    } else if (e.target.innerText === '*') {
      setOperacao("*");
    } else if (e.target.innerText === '/') {
      setOperacao("/");
    }
    console.log(e.target.innerText);
  }

  // resultado ao clicar na igualdade
  const resultado = (e) => {
    if (operacao === '+') {
      setNumero(Number(primeiroNumero)+Number(numero));
    } else if (operacao === '-') {
      setNumero(Number(primeiroNumero)-Number(numero));
    } else if (operacao === '*') {
      setNumero(Number(primeiroNumero)*Number(numero));
    } else if (operacao === '/') {
      setNumero(Number(primeiroNumero)/Number(numero));
    }

    console.log(e.target.innerText);
  }

  // limpar console
  const limparConsole = (e) => {
    setNumero("0");
    setPrimeiroNumero("");
  }

  return (
    <div className="App">
      <div>
        <Display props={numero} />
      </div>
      <div className='linha'>
        <Botao props={"1"} onClick={numeroDigitado} />
        <Botao props={"2"} onClick={numeroDigitado} />
        <Botao props={"3"} onClick={numeroDigitado} />
        <Botao props={"-"} onClick={operacaoMatematica} />
      </div>
      <div className='linha'>
        <Botao props={"4"} onClick={numeroDigitado} />
        <Botao props={"5"} onClick={numeroDigitado} />
        <Botao props={"6"} onClick={numeroDigitado} />
        <Botao props={"+"} onClick={operacaoMatematica} />
      </div>

      <div className='linha'>
        <Botao props={"7"} onClick={numeroDigitado} />
        <Botao props={"8"} onClick={numeroDigitado} />
        <Botao props={"9"} onClick={numeroDigitado} />
        <Botao props={"*"} onClick={operacaoMatematica} />
      </div>
      <div className='linha'>
        <Botao props={"C"} onClick={limparConsole} />
        <Botao props={"0"} onClick={numeroDigitado} />
        <Botao props={"="} onClick={resultado} />
        <Botao props={"/"} onClick={operacaoMatematica} />
      </div>
    </div>
  );
}

export default App;
