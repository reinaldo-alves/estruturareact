import styled from 'styled-components';

export const Container = styled.div`
    background: red;
    height: 90px;
`;

//Pré-processador css é a possibilidade de escrever css com algumas funcionalidades a mais
//O styled component traz o pré processador de css embutido

export const ListItem = styled.li<{active:boolean}>`
    list-style: none;
    text-decoration: none;
    color: ${(props) => props.active ? '#fff' : '#333'};
    cursor: pointer;
`;