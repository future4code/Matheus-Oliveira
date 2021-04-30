import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px;
    width: 40vw;

    div {display: flex;} //Testando esse jeito diferente de fazer a estilização
    
`;

const Foto = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Titulo = styled.h4`
    margin-right: 5px;

`;

function CardGrande(props) {
    return (
        <Container>
            <Foto src={ props.imagem } />
            <div>
                <Titulo>{ props.info }</Titulo>
                <p>{ props.minhaInfo }</p>
            </div>
        </Container>
    )
}

export default CardGrande;