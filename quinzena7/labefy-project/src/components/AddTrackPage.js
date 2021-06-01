import React from 'react'
import axios from 'axios'

export default class AddTrackPage extends React.Component {
    state = {
      inputMusicName: "",
      inputArtist: "",
      inputUrl: "",
    }
  
    onChangeInputMusic = (event) => {
      this.setState({inputMusicName: event.target.value})
    }
  
    onChangeInputArtist = (event) => {
      this.setState({inputArtist: event.target.value})
    }
  
    onChangeInputUrl = (event) => {
      this.setState({inputUrl: event.target.value})
    }
  
    addTrackPlaylist = (playlistId) => {
      const body = {
        name: this.state.inputMusicName, 
        artist: this.state.inputArtist,
        url: this.state.inputUrl
    }
      const AddTrack = playlistId
      axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${AddTrack}/tracks`, body, {
          headers: {
            Authorization: 'matheus-rodrigues-munoz'
          }
        }).then((res) => {
          alert("Track successfully created", res)
        }).catch((err) => {
          alert("No music, artist or url found. Try again", err)
        })
      }
  
    render() {
      return (
        <div>
            <h1>Playlist Library</h1>
          <input
            type="text"
            value={this.state.inputMusicName} 
            onChange={this.onChangeInputMusic} 
            placeholder="Music...">
          </input>
          <input
            type="text"
            value={this.state.inputArtist} 
            onChange={this.onChangeInputArtist} 
            placeholder="Artist...">
          </input>
          <input
            type="text"
            value={this.state.inputUrl} 
            onChange={this.onChangeInputUrl} 
            placeholder="Url...">
          </input>
          <button onClick={this.addTrackPlaylist}>Add Track</button>
          <button onClick={() => this.props.PageChange("PlaylistLibrary")}>Back to Playlist Library</button>
        </div>
      );
    }
  }