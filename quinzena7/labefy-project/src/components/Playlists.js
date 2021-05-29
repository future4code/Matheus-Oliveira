import React from 'react'
import axios from 'axios'

export default class Playlists extends React.Component {
  state = {
    playlistList: []
  }

  allPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
    headers: {
      Authorization: 'matheus-rodrigues-munoz'
    }
    }).then((res) => {
      this.setState({playlistList: res.data})
			console.log(res.data)
    }).catch(() => {
    })
  }

  render() {
    return (
      <div>
      	<h1>Playlists</h1>
					{this.state.playlistList.map((playlist, index) => { 
      			return (
            	<div key={index}>
              	<span>{playlist.name}</span>
            	</div>
          	)
      		})}
      </div>
    );
  }
}