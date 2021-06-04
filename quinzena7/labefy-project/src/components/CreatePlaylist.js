import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CreateContainer = styled.div`
  position: absolute;
  left: 200px;
  top: 460px;
`

const InputNamePlaylist = styled.div`
  position: absolute;
  left: 300px;
  bottom: 360px;

  input {
    height: 35px;
    width: 200px;
    border: none;
    border-bottom: 1px solid #FC6D6D;
    outline: none;
    background-color: #111;
    color: white;
    font-weight: bold;
    font-size: 22px;
  }
`

const SendButtonContainer = styled.div`
  position: absolute;
  left: 530px;
  bottom: 345px;

  a {
    font-size: 42px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  a:hover {
    color: #FC6D6D;
    transition: 0.3s;
  }
`

export default class CreatePlaylistForm extends React.Component {
 state ={
    inputNameValue: ""
 }

 onChangeInputName = (event) => {
  this.setState({ inputNameValue: event.target.value })
}

  createPlaylist = () => {
    const body = {
      name: this.state.inputNameValue
  }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
      }).then((res) => {
        alert("Playlist successfully created", res)
          this.setState({ inputNameValue: "" })
          this.props.getAllPlaylists()
      }).catch((err) => {
          alert("Error", err.data)
      })
    }

  render() {
    return (
      <div>

      <CreateContainer>
        <h1>Create your Playlist here!</h1>
      </CreateContainer>

      <InputNamePlaylist>
        <input value={this.state.inputNameValue} onChange={this.onChangeInputName} placeholder="Playlist name..."></input>
      </InputNamePlaylist>

      <SendButtonContainer>
        <a onClick={this.createPlaylist}>❯</a>
      </SendButtonContainer>

      </div>
    );
  }
}