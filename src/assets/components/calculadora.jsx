import React, { useState } from 'react';

function Calculadora() {
    const [expressao, setExplessao] = useState('')
    const [resultado, setResultado] = useState('')

    const handleClick = (value) => {
        setExplessao(expressao + value)
    };

    const calcularResultado = () => {
        try {
            const resultadoCalculado = eval(expressao)
            setResultado(resultadoCalculado)
        }   catch (error) {
            setResultado('Erro')
        } 
    }
};
    const IimparTudo = () => {
        setExplessao('');
        setResultado('');
    }

    return (
        <div>
           <h2>Calculadora Simples</h2>
           <input
           value={expressao}
           readOnly
           style={{ marginBottom: '10px' }}
           />
        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          
        <div>
          
        </div>
        </div>
    )

