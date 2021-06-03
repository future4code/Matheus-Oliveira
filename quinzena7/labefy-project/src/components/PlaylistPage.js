import React from 'react'
import axios from 'axios'

export default class PlaylistPage extends React.Component {
    state = {
      inputMusicName: "",
      inputArtist: "",
      inputUrl: "",
      playlistTracks: []
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

    addTrackPlaylist = () => {
      const body = {
        name: this.state.inputMusicName, 
        artist: this.state.inputArtist,
        url: this.state.inputUrl
    }
      axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedPlaylistId}/tracks`, body, {
          headers: {
            Authorization: 'matheus-rodrigues-munoz'
          }
        }).then(() => {
          alert("Track successfully added to your playlist")
          {this.getAllTracks()}
        }).catch(() => {
          alert("No music, artist or url found. Try again")
        })
      }

    getAllTracks = () => {
      axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedPlaylistId}/tracks`, {
          headers: {
            Authorization: 'matheus-rodrigues-munoz'
          }
          }).then((res) => {
            this.setState({ playlistTracks: res.data.result.tracks })
          }).catch((err) => {
            alert("Error to get your playlist tracks", err.data)
          })
    }

    componentDidMount() {
      {this.getAllTracks()}
    }
  
    render() {
      const mapTracks = this.state.playlistTracks.map((tracks) => {
        return (
          <div key={tracks.id}>
            <a href={tracks.url}>{tracks.name}</a>
            <button>x</button>
          </div>
      )
    })

      return (
        <div>
          <h1>Add musics to your playlist</h1>
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
          <button onClick={() => this.addTrackPlaylist()}>
            Add Track
          </button>
          <button onClick={() => this.props.PageChange("PlaylistLibrary")}>
            Back to Playlist Library
          </button>
          <h1>Playlist Tracks</h1>
          {mapTracks}
        </div>
      );
    }
  }