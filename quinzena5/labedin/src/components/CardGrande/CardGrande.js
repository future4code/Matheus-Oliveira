import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const Foto = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const Title = styled.h4`
    margin-bottom: 15px;
    font-size: 20px;
`;

function CardGrande(props) {
    return (
        <Container>
            <Foto src={ props.imagem } />
            <div>
                <Title>{ props.nome }</Title>
                <p>{ props.descricao }</p>
            </div>
        </Container>
    )
}

export default CardGrande;