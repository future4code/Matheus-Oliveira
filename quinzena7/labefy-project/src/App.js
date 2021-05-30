import React from 'react'
import CreatePlaylistForm from './components/CreatePlaylistForm'
import YourPlaylistPage from './components/YourPlaylistPage'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "CreatePlaylistPage"
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
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
        {this.renderPage()}
      </div>
    );
}
}
