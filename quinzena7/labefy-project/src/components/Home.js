import React from 'react'

export default class CreatePlaylistForm extends React.Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => this.props.PageChange("CreatePlaylistPage")}>Want to create your playlist?</button>
        <button onClick={() => this.props.PageChange("YourPlaylistPage")}>Listen your playlist</button>
      </div>
    );
  }
}