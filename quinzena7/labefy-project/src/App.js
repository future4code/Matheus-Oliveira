import React from 'react'
import axios from 'axios'
import CreatePlaylistForm from './components/CreatePlaylistForm'
import PlaylistLibrary from './components/PlaylistLibrary'
import PlaylistPage from './components/PlaylistPage'
import Dashboard from './components/Dashboard'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "Dashboard",
    libraryList: [],
    selectedPlaylistId: null,
    inputNameValue: "",
    selectedplaylistName: ""
  }

  onChangeInputName = (event) => {
    this.setState({ inputNameValue: event.target.value })
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  goToPlaylistPage = (playlistId) => {
    this.PageChange("PlaylistPage")
    this.setState({ selectedPlaylistId: playlistId })
  }

  getAllPlaylists = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: 'matheus-rodrigues-munoz'
        }
        }).then((res) => {
          this.setState({ libraryList: res.data.result.list })
        }).catch(() => {
        })
  }

  renderPage = () => {
    switch (this.state.page) {
      case "Dashboard":
        return <Dashboard PageChange={this.PageChange}/>
      case "CreatePlaylistPage":
        return (
        <CreatePlaylistForm
         PageChange={this.PageChange}
         inputNameValue={this.state.inputNameValue}
         onChangeInputName={this.state.onChangeInputName}/>
        )
      case "PlaylistLibrary":
        return (
        <PlaylistLibrary
        libraryList={this.state.libraryList}
        playlistList={this.state.playlistList}
        getAllPlaylists={this.getAllPlaylists}
        goToPlaylistPage={this.goToPlaylistPage}
        PageChange={this.PageChange}/>
        )
      case "PlaylistPage":
        return (
        <PlaylistPage 
        getAllPlaylists={this.getAllPlaylists}
        PageChange={this.PageChange}
        selectedPlaylistId={this.state.selectedPlaylistId}/>
        )
      default:
        return <h1>Page not found</h1>
    }
  };

  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
}
}
