import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';

class Playlist extends Component {
  render() {
    return (
      <Playlist tracks={this.props.playlistTracks} />
      <div className="Playlist">
  <input defaultValue={"New Playlist"}/>
  <!-- Add a TrackList component -->
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default Playlist;
