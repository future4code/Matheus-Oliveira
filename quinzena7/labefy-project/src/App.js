import React from 'react'
import Login from './components/Login'
import CreatePlaylistForm from './components/CreatePlaylistForm'
import YourPlaylistPage from './components/YourPlaylistPage'
import Home from './components/Home'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "Home"
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "Home":
        return <Home PageChange={this.PageChange}/>
      case "CreatePlaylistPage":
        return <CreatePlaylistForm PageChange={this.PageChange} />
      case "YourPlaylistPage":
        return <YourPlaylistPage PageChange={this.PageChange}/>
      default:
        return <div></div>
    }
  };

  render() {
    return (
      <div className="App">
        <Login />
        {this.renderPage()}
      </div>
    );
}
}
