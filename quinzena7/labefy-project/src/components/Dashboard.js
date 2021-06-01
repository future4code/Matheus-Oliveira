import React from 'react'

export default class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => this.props.PageChange("CreatePlaylistPage")}>Want to create your playlist?</button>
        <button onClick={() => this.props.PageChange("PlaylistLibrary")}>Your Library</button>
      </div>
    );
  }
}