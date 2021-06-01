import React from 'react'
import axios from 'axios'

export default class PlaylistLibrary extends React.Component {
  state = {
    libraryList: [],
    playlistList: [],
    inputSearch: ""
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

  getAllPlaylists = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
        }).then((res) => {
          this.setState({libraryList: res.data.result.list, playlistList: res.data.result.list})
        }).catch(() => {
        })
  }

  componentDidMount() {
    {this.getAllPlaylists()}
  }

  searchPlaylist = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ libraryList: this.state.playlistList });
    }
    this.setState({
      inputSearch: event.target.value,
    });
    this.playlistFiltered(event.target.value);
  };

  playlistFiltered = (name) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${name}`, {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
      }).then((res) => {
        if (res.data.length > 0) {
          this.setState({ libraryList: res.data });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  removerPlaylist = (playlistId) => {
    if( window.confirm("Do you really want to delete your playlist?")) {
      const deletePlaylist = playlistId
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${deletePlaylist}`, {
            headers: { 
              Authorization: 'matheus-rodrigues-munoz'
            }
          }).then((res) => {
              alert('Playlist deleted!', res.data)
              this.getAllPlaylists()
            }
          ).catch((err) =>{
            alert('Error.', err.res.data)
          })
    }
  }

  render() {
    const mapPlaylist = this.state.libraryList.map((playlist) =>{
      return (
        <div key={playlist.id}>
          <span>{playlist.name}</span>
          <button onClick={() => this.props.PageChange("AddTrackPage")}>Add music</button>
          <button onClick={() => this.removerPlaylist(playlist.id)}>Delete Playlist
          </button>
        </div>
      )
    })

    return (
      <div>
      	<h1>Playlist Library</h1>
        <input
          type="text"
          value={this.state.inputSearch} 
          onChange={this.searchPlaylist} 
          placeholder="Search for a playlist">
        </input>
        {mapPlaylist}
        <button onClick={() => this.props.PageChange("Dashboard")}>Back to Dashboard</button>
      </div>
    );
  }
}