import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const LibraryContainer = styled.div`
  position: absolute;
  right: 250px;
  top: 460px;
`

const PlaylistContainer = styled.div`
  position: absolute;
  right: 100px;
  top: 555px;
  max-height: 350px;
  width: 500px;
  overflow-y: scroll;
`

const InputSearchContainer = styled.div`
  position: absolute;
  right: 336px;
  top: 515px;
  
  input {
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid #FC6D6D;
    outline: none;
    background-color: #111;
    color: white;
    font-size: 18px;
  }

  input::placeholder {
    color: white;
  }
`

const PlaylistListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PlaylistName = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;

  a{
    transition: color 0.2s;
  }

  a:hover {
    transition: color 0.2s;
    color: #FC6D6D;
  }
`

const ButtonsContainer = styled.div`
  cursor: pointer;
  font-weight: bold;
  
  a {
    border: 1px solid white;
    margin-right: 25px;
    margin-bottom: 5px;
    padding: 0 8px;
  }
  
  a:hover {
    border: 1px solid red;
    color: red;
  }
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
      <PlaylistListContainer>

        <PlaylistName>
          <a onClick={() => this.props.goToPlaylistPage(playlist.id, playlist.name)}>
          {playlist.name}
          </a>
        </PlaylistName>

        <ButtonsContainer key={playlist.id}>
          <a onClick={() => this.deletePlaylist(playlist.id)}>
            X
          </a>
        </ButtonsContainer>
      </PlaylistListContainer>
      )
    })

    return (
      <div>
        <LibraryContainer>
          <h1>Playlist Library</h1>
        </LibraryContainer>
      <InputSearchContainer>
        <input
          type="text"
          value={this.state.inputSearch} 
          onChange={this.searchPlaylist} 
          placeholder="Search for a playlist...">
        </input>
      </InputSearchContainer>
        <PlaylistContainer>
          {mapPlaylist}
        </PlaylistContainer>
      </div>
    );
  }
}