import React from 'react'

const Botao = ({props, onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{props}</button>
    </div>
  )
}

export default Botao;