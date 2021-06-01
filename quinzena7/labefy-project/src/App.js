import React from 'react'
import CreatePlaylistForm from './components/CreatePlaylistForm'
import PlaylistLibrary from './components/PlaylistLibrary'
import AddTrackPage from './components/AddTrackPage'
import Dashboard from './components/Dashboard'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "Dashboard"
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "Dashboard":
        return <Dashboard PageChange={this.PageChange}/>
      case "CreatePlaylistPage":
        return <CreatePlaylistForm PageChange={this.PageChange} />
      case "PlaylistLibrary":
        return <PlaylistLibrary PageChange={this.PageChange}/>
      case "AddTrackPage":
        return <AddTrackPage PageChange={this.PageChange}/>
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
