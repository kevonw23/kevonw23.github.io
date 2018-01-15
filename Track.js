import React, { Component } from 'react';
import logo from './logo.svg';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div class="Track">
  <div class="Track-information">
    <h3>this.props.track.name={}</h3>
    <p>this.props.track.artist | this.props.track.album</p>
  </div>
  <a class="Track-action"><!-- + or - will go here --></a>
</div>
    );
  }
}

export default Track;
