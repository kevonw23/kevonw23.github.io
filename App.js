import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';

const playlistTracks = new Tracks ([name: 'Crossroads', artist: 'Bone Thugs n Harmony', album: 'E.1999 Eternal'])
const playlistName = new Name (['MyPlaylist'])

class App extends Component {
  render() {
    return (
      <App playlistName={this.state.playlistName} />
      <App playlistTracks={this.state.playlistTracks} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state._searchResults;
  }
}

get searchResults() {
  return.this._searchResults;
}

const searchResults = new Search (['name', 'artist', 'album']);

export default App;
