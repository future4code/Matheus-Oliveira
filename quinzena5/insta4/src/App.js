import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Inputs = styled.div`
  display: flex;
  padding: 15px 0;
`

class App extends React.Component {
    state = {
      usuario: [
        {
            nomeUsuario: 'matheus',
            fotoUsuario: 'https://picsum.photos/50/51',
            fotoPost: 'https://picsum.photos/200/151'
        },
        {
            nomeUsuario: 'paulinha',
            fotoUsuario: 'https://picsum.photos/50/55',
            fotoPost: 'https://picsum.photos/200/171'
        },
        {
            nomeUsuario: 'bruno',
            fotoUsuario: 'https://picsum.photos/50/52',
            fotoPost: 'https://picsum.photos/200/161'
        }
      ],

      valorInputNomeUsuario: "",
      valorInputImagemUsuario: "",
      valorInputImagemPost: ""
    };

    adicionarPost = () => {

      const novoPost = {
        nomeUsuario: this.state.valorInputNomeUsuario,
        fotoUsuario: this.state.valorInputImagemUsuario,
        fotoPost: this.state.valorInputImagemPost
      }

      const novosPosts = [...this.state.usuario, novoPost];
      this.setState({ usuario: novosPosts })
    }

    onChangeInputNome = (event) => {
      this.setState({valorInputNomeUsuario: event.target.value});
    }

    onChangeInputFoto = (event) => {
      this.setState({valorInputImagemUsuario: event.target.value});
    }

    onChangeInputPost = (event) => {
      this.setState({valorInputImagemPost: event.target.value});
    }
  
    render() {
     
      const componenteUsuario = [...this.state.usuario].map((usuario) => {
        
        return (
          <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
          />
        );
      });
  
      return (
        <div>
        <MainContainer>
          <Inputs>
            <input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNome}
              placeholder={"Nome do usuário"}
            />
            
            <input
              value={this.state.valorInputImagemUsuario}
              onChange={this.onChangeInputFoto}
              placeholder={"Foto do Perfil"}
            />

            <input
              value={this.state.valorInputImagemPost}
              onChange={this.onChangeInputPost}
              placeholder={"Link do Post"}
            />

            <button 
              onClick={this.adicionarPost}>Adicionar Post
              
            </button>
          </Inputs>
          {componenteUsuario}
        </MainContainer>
      </div>
      );
    }
  }
  
  export default App;
