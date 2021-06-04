import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CreateContainer = styled.div`
  position: absolute;
  left: 200px;
  top: 460px;
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
        <input value={this.state.inputNameValue} onChange={this.onChangeInputName} placeholder="Playlist name..."></input>
        <button onClick={this.createPlaylist}>+</button>
        </div>
    );
  }
}