import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    pagina: "criarUsuario",
    valorInputNome: "",
    valorInputEmail: "",
    listaDeUsuarios: []
  }

  onChangeInputNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({valorInputEmail: event.target.value})
  }

  trocarPagina = () => {
    if (this.state.pagina === "criarUsuario") {
      this.setState({pagina: "listausuario"})
    } else {
      this.setState({pagina: "criarUsuario"})
    }
  }

  criarUsuario = () => {
    const body = {
      name: this.state.valorInputNome,
      email: this.state.valorInputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    headers: {
      Authorization: 'matheus-rodrigues-munoz'
    }
    }).then((response) => {
      alert("Usuário criado com Sucesso", response)
      this.setState({valorInputNome: "", valorInputEmail: ""})
      this.listarUsuario()
    }).catch(() => {
      alert("Erro")
    })
  }

  listarUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
    headers: {
      Authorization: 'matheus-rodrigues-munoz'
    }
    }).then((response) => {
      this.setState({listaDeUsuarios: response.data})
    }).catch(() => {
    })
  }

  componentDidMount() {
    {this.listarUsuario()}
  }

  removerUsuario = (usuarioId) => {
    if( window.confirm("Você realmente deseja deletar o usuário?")) {
    const deletarUsuario = usuarioId;
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${deletarUsuario}`, {
      headers: { 
        Authorization: 'matheus-rodrigues-munoz'
      }
    }).then((response) => {
        alert('Usuário deletado!');
        this.listarUsuario()
      }
    ).catch((error) =>{
      alert('Erro ao deletar usuário.', error.response.data);
    })
  }
  }

  render() {
    const renderizarPagina = () => {
      if (this.state.pagina === "criarUsuario") {
        return (
          <div className="form-usuario-lista">
            <button className="main-button" onClick={this.trocarPagina}>Trocar de página</button>
            <input value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder="Nome"></input>
            <input value={this.state.valorInputEmail} onChange={this.onChangeInputEmail} placeholder="Email"></input>
            <button className="main-button" onClick={this.criarUsuario}>Criar</button>
          </div>
        )
      } else {
        return (
          <div className="form-usuario-lista">
            <button className="main-button" onClick={this.trocarPagina}>Voltar</button>
            <h2>Lista de Usuários</h2>
            {this.state.listaDeUsuarios.map((usuarios, index) => { 
              return (
                <div key={index}>
                  <span className="main-user">{usuarios.name}</span>
                  <button className="main-button" onClick={() => this.removerUsuario(usuarios.id)}>Remover</button>
                </div>
              )
          })}
          </div>
        )
      }
    }
    return (
      <body>
        <h1>Labenusers</h1>
        {renderizarPagina()}
      </body>
    );
  }
}
