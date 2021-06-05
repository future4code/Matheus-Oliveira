import React from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import BackgroundGuitar from '../../assets/images/background-guitar.jpeg'

const PlaylistPageContainer = styled.div`
  background-color: #111;
  height: 100vh;

  .background-image-guitar {
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

  h1 {
    color: white;
    font-weight: bold;
    font-size: 48px;
    z-index: 2;
  }

  h2 {
    position: absolute;
    left: 45.4vw;
    top: 38vh;
    color: white;
  }

  h3 {
    color: white;
    font-size: 22px;
  }

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
  h1.fromLeft:after{  transform-origin:  50% 50%; }
  h2:hover:after { transform: scaleX(1); }
  h2.fromLeft:after{  transform-origin:  50% 50%; }

  .back-button {
    position: absolute;
    left: 150px;
    top: 88px;
    color: white;
    font-size: 62px;
    cursor: pointer;
  }

  .back-button:hover {
    color: #FC6D6D;
  }

  input {
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid #FC6D6D;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 18px;
    padding-bottom: 3px;
    z-index: 2;
  }

  input::placeholder {
    color: white;
  }

`

const PlaylistTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`

const AddTrackArrow = styled.div`
  position: absolute;
  left: 58%;
  bottom: 66.6%;

  a {
    font-size: 48px;
    font-weight: 400;
    color: white;
    cursor: pointer;
    color: inherit;
    text-decoration: inherit;
  }

  a:hover {
    color: #FC6D6D;
  }
`

const InputsTrackForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`

const TracksForm = styled.div`
  position: absolute;
  left: 32%;
  top: 45%;
  overflow-y: scroll;
  max-height: 55vh;
  width: 690px;
`

const TrackTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 32px;

  .delete-button {
    cursor: pointer;
    color: white;
    font-size: 18px;
    font-weight: bold;
    color: inherit;
    text-decoration: inherit;
  }

  .delete-button:hover {
    color: red;
  }
`
const TrackUrl = styled.div`
  padding-bottom: 22px;
`

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
        this.getAllTracks()
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
              this.getAllTracks()
          }).catch((err) =>{
            alert('Error.', err.data)
          })
      }
    }

    componentDidMount() {
      this.getAllTracks()
    }
  
    render() {
      const mapTracks = this.state.playlistTracks.map((tracks) => {
        return (
          <div key={tracks.id}>
            <TrackTitle>
              <h3>{tracks.name}</h3>
              <a href="/#" className="delete-button" onClick={() => this.deletePlaylist(tracks.id)}>X</a>
            </TrackTitle>
              <TrackUrl>
                <ReactPlayer url={tracks.url} controls/>
              </TrackUrl>
          </div>
          
      )
    })
    
      return (
        <PlaylistPageContainer>
          <img className="background-image-guitar" src={BackgroundGuitar} alt="Playing Guitar"></img>
          <PlaylistTitle>
            <h1 className="fromLeft">{this.props.selectedPlaylistName}</h1>
          </PlaylistTitle>
          <InputsTrackForm>
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
          </InputsTrackForm>
          <AddTrackArrow>
            <a href="/#" onClick={() => this.addTrackPlaylist()}>
            +
            </a>
          </AddTrackArrow>

          <a href="/#" className="back-button" onClick={() => this.props.LibraryToPlaylistPage("Dashboard")}>
            «
          </a>
          
          <h2 className="fromLeft">Playlist Tracks</h2>

          <TracksForm>
            {mapTracks}
          </TracksForm>
        </PlaylistPageContainer>
      );
    }
  }