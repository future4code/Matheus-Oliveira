import React from 'react'

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.responseGoogleName}</h1>
        <img src={this.props.responseGoogleImg}></img>
        <button onClick={() => this.props.PageChange("Home")}>Logout</button>
        
        <h2>Dashboard</h2>
        <button onClick={() => this.props.PageChange("CreatePlaylistPage")}>Want to create your playlist?</button>
        <button onClick={() => this.props.PageChange("PlaylistLibrary")}>Your Library</button>
      </div>
    );
  }
}