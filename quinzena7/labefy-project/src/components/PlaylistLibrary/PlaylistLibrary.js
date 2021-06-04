import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const LibraryContainer = styled.div`
  position: absolute;
  right: 250px;
  top: 460px;
`

export default class PlaylistLibrary extends React.Component {
  state = {
    inputSearch: "",
  }

  searchPlaylist = (event) => {
    this.setState({
      inputSearch: event.target.value,
    });
  };

  componentDidMount() {
    this.props.getAllPlaylists()
  }

  deletePlaylist = (playlistId) => {
    if( window.confirm("Do you really want to delete your playlist?")) {
      const deletePlaylist = playlistId
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${deletePlaylist}`, {
            headers: { 
              Authorization: 'matheus-rodrigues-munoz'
            }
          }).then(() => {
            alert('Playlist deleted!')
            this.props.getAllPlaylists()
            }
          ).catch((err) =>{
            alert('Error.', err.data)
          })
    }
  }

  render() {
    const filterPlaylist = this.props.libraryList.filter((playlist) => {
      if (playlist.name.includes(this.state.inputSearch)) {
        return true
      } else {
        return false
      }
    })
    const mapPlaylist = filterPlaylist.map((playlist) => {
      return (
        <div key={playlist.id}>
          <span>{playlist.name}</span>
          <button onClick={() => this.props.goToPlaylistPage(playlist.id, playlist.name)}>Add musics</button>
          <button onClick={() => this.deletePlaylist(playlist.id)}>Delete Playlist
          </button>
        </div>
      )
    })

    return (
      <div>
        <LibraryContainer>
          <h1>Playlist Library</h1>
        </LibraryContainer>
        <input
          type="text"
          value={this.state.inputSearch} 
          onChange={this.searchPlaylist} 
          placeholder="Search for a playlist">
        </input>
        {mapPlaylist}
      </div>
    );
  }
}