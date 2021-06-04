import React from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

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
        this.setState({inputMusicName: "", inputArtist: "", inputUrl: ""})
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

  deletePlaylist = (trackDeletedId) => {
    const deleteTrack = trackDeletedId
      if( window.confirm("Do you really want to delete this track?")) {
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectedPlaylistId}/tracks/${deleteTrack}`, {
            headers: { 
              Authorization: 'matheus-rodrigues-munoz'
            }
          }).then(() => {
              alert('Track deleted!')
              {this.getAllTracks()}
          }).catch((err) =>{
            alert('Error.', err.data)
          })
      }
    }

    componentDidMount() {
      {this.getAllTracks()}
    }
  
    render() {
      const mapTracks = this.state.playlistTracks.map((tracks) => {
        return (
          <div key={tracks.id}>
            <h2>{tracks.name}</h2>
            <ReactPlayer url={tracks.url} controls/>
            <button onClick={() => this.deletePlaylist(tracks.id)}>x</button>
          </div>
      )
    })
    
      return (
        <div>
          <h1>Add musics to your {this.props.selectedPlaylistName} playlist</h1>
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