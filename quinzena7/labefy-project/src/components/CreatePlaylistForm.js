import React from 'react'
import axios from 'axios'

export default class CreatePlaylistForm extends React.Component {
 
  createPlaylist = () => {
    const body = {
      name: this.props.inputNameValue,
  }

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
      }).then((res) => {
        alert("Playlist successfully created", res)
          this.setState({ inputNameValue: "" })
      }).catch((err) => {
          alert("Error", err.data)
      })
    }

  render() {
    return (
      <div>
        <h1>Create your Playlist here!</h1>
        <input value={this.props.inputNameValue} onChange={this.props.onChangeInputName} placeholder="Playlist name..."></input>
        <button onClick={this.createPlaylist}>+</button>
        <button onClick={() => this.props.PageChange("PlaylistLibrary")}>Your Library</button>
        <button onClick={() => this.props.PageChange("Dashboard")}>Back to Dashboard</button>
      </div>
    );
  }
}