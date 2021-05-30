import React from 'react'
import axios from 'axios'

export default class Playlists extends React.Component {
  state = {
    playlistList: []
  }

  getAllPlaylists = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
        }).then((res) => {
          this.setState({playlistList: res.data.result.list})
          this.getAllPlaylists()
        }).catch(() => {
        })
  }

  componentDidMount() {
    {this.getAllPlaylists()}
  }

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
    const mapPlaylist = this.state.playlistList.map((playlist) =>{
      return (
        <div key={playlist.id}>
          <span>{playlist.name}</span>
          <button onClick={() => this.removerPlaylist(playlist.id)}>Remove</button>
        </div>
      )
    })

    return (
      <div>
      	<h1>Playlist Library</h1>
        {mapPlaylist}
        <button onClick={() => this.props.PageChange("CreatePlaylistPage")}>Back</button>
      </div>
    );
  }
}