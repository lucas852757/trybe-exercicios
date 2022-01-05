import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const {conteudo, bloco, status} = conteudos[0];
const list = ['O conteúdo é: '+`${conteudo}`, 'Bloco: '+`${bloco}`, 'Status: '+`${status}`];

class Content extends React.Component {
  render() {
    return <p>{list.map((element) => Task(element))}</p>
  }
}

export default Content;