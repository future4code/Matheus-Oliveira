import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import BackgroundMic from '../assets/images/background-mic.jpeg'
import CreatePlaylist from '../components/CreatePlaylist'
import PlaylistLibrary from '../components/PlaylistLibrary/PlaylistLibrary'
import PlaylistPage from '../components/PlaylistLibrary/PlaylistPage'

const DashboardBackground = styled.div`
  background-color: #111;
  height: 100vh;
  color: white;

  .background-image-mic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    z-index: 0;
    opacity: 0.25;
  }

  .logout-txt {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    right: -1350px;
    top: 1px;
    transition: 0.5s;
    z-index: 2;
    
  }

  .logout-txt:hover {
    color: #FC6D6D;
    transition: 0.5s;
  }
`

const WelcomeContainer = styled.div`
  position: absolute;
  left: 200px;
  top: 90px;
  display: inline-block;
  margin: 0;
  z-index: 2;

  h1:after {
  display:block;
  content: '';
  border-bottom: solid 1px #FC6D6D;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

  h2:after {
    display:block;
    content: '';
    border-bottom: solid 1px #FC6D6D;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}

  h1:hover:after { transform: scaleX(1); }
  h1.fromLeft:after{  transform-origin:  0% 50%; }
  h2:hover:after { transform: scaleX(1); }
  h2.fromLeft:after{  transform-origin:  0% 50%; }
`

const NamePhotoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 62%;
  top: 38%;
  z-index: 2;

  img {
    padding-left: 20px;
    border-radius: 50%;
    transform: scale(1);
    transition: 0.5s;
  }

  img:hover {
  transform: scale(1.06);
}
`

const DashboardTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 350px;
  text-transform: uppercase;
  font-size: 26px;

  h2:after {
  display:block;
  content: '';
  border-bottom: solid 1px #FC6D6D;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

h2:hover:after { transform: scaleX(1); }
`

export default class Dashboard extends React.Component {
  state = {
    libraryList: [],
    selectedPlaylistId: null,
    selectedPlaylistName: null,
    page: "Dashboard"
  }

  goToPlaylistPage = (playlistId, playlistName) => {
    this.LibraryToPlaylistPage("PlaylistPage")
    this.setState({ selectedPlaylistId: playlistId })
    this.setState({ selectedPlaylistName: playlistName })
  }

  LibraryToPlaylistPage = (page) => {
    this.setState({
      page: page,
    });
  };

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
    return (
      <DashboardBackground>
        <img className="background-image-mic" src={BackgroundMic}></img>
        <WelcomeContainer>
          <h1 className="fromLeft">Welcome,</h1>
        <NamePhotoContainer>
          <h2 className="fromLeft">{this.props.responseGoogleName}</h2>
          <img src={this.props.responseGoogleImg}></img>
        </NamePhotoContainer>
          <a className="logout-txt" 
          onClick={() => this.props.PageChange("Home")}>Logout
          </a>
        </WelcomeContainer>
   
        <DashboardTitle>
          <h2>Dashboard</h2>
        </DashboardTitle>

        <CreatePlaylist getAllPlaylists={this.getAllPlaylists}/>

        <PlaylistLibrary 
          getAllPlaylists={this.getAllPlaylists}
          libraryList={this.state.libraryList}
          goToPlaylistPage={this.goToPlaylistPage}
          selectedPlaylistId={this.state.selectedPlaylistId}
          selectedPlaylistName={this.state.selectedPlaylistName}
        />
      </DashboardBackground>
    );
      case "PlaylistPage":
        return <PlaylistPage 
        LibraryToPlaylistPage={this.LibraryToPlaylistPage}
        goToPlaylistPage={this.goToPlaylistPage}
        selectedPlaylistId={this.state.selectedPlaylistId}
        selectedPlaylistName={this.state.selectedPlaylistName}
        />
      default:
        return <h1>Page not found</h1>
      
  }
}

  render() {
    return (
    <div>
      {this.renderPage()}
    </div>
    )
  }
}
    