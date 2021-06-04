import React from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import CreatePlaylistForm from './pages/CreatePlaylistPage/CreatePlaylistPage'
import PlaylistLibrary from './pages/PlaylistLibrary/PlaylistLibrary'
import PlaylistPage from './pages/PlaylistPage/PlaylistPage'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "Home",
    libraryList: [],
    selectedPlaylistId: null,
    selectedPlaylistName: null,
    responseGoogleName: null,
    responseGoogleImg: null
  }

  responseGoogle = (response) => {
    if(response) {
      this.PageChange("Dashboard")
      this.setState({ responseGoogleName: response.profileObj.givenName })
      this.setState({ responseGoogleImg: response.profileObj.imageUrl })
    } else {
      this.props.PageChange("Home")
    }
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  goToPlaylistPage = (playlistId, playlistName) => {
    this.PageChange("PlaylistPage")
    this.setState({ selectedPlaylistId: playlistId })
    this.setState({ selectedPlaylistName: playlistName })
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
      case "Home":
        return (
          <div>
            <Home 
            PageChange={this.PageChange}
            />
            <GoogleLogin
              className="google-button"
              clientId="824766333517-38plugusncen1bdcck8q529tqdpihjh8.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        )
      case "Dashboard":
        return (
        <Dashboard
        PageChange={this.PageChange}
        responseGoogleName={this.state.responseGoogleName}
        responseGoogleImg={this.state.responseGoogleImg}
        />
        )
      case "CreatePlaylistPage":
        return <CreatePlaylistForm
        PageChange={this.PageChange}
        />
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
        selectedPlaylistId={this.state.selectedPlaylistId}
        selectedPlaylistName={this.state.selectedPlaylistName}/>
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
