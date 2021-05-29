import React from 'react'
import axios from 'axios'

export default class CreatePlaylistForm extends React.Component {
  state = {
    inputNameValue: ""
  }

  onChangeInputName = (event) => {
    this.setState({inputNameValue: event.target.value})
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputNameValue,
  }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
      }).then((res) => {
        alert("Playlist successfully created", res)
          this.setState({inputNameValue: ""})
      }).catch((err) => {
          alert("Error", err)
      })
    }

    allPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
    headers: {
      Authorization: 'matheus-rodrigues-munoz'
    }
    }).then((res) => {
      this.setState({playlistList: res.data.result})
			console.log(res.data)
    }).catch(() => {
    })
  }

  render() {
    return (
      <div>
        <h1>Create your Playlist here!</h1>
        <input value={this.state.inputNameValue} onChange={this.onChangeInputName} placeholder="Playlist name..."></input>
        <button onClick={this.createPlaylist}>+</button>
      </div>
    );
  }
}