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
        }).catch(() => {
        })
  }

  componentDidMount() {
    {this.getAllPlaylists()}
  }

  render() {
    return (
      <div>
      	<h1>Playlists</h1>
        {this.state.playlistList.map((playlist) => { 
              return (
                <div key={playlist.id}>
                  <span>{playlist.name}</span>
                </div>
              )
          })}
      </div>
    );
  }
}