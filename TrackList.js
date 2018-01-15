import React, { Component } from 'react';
import logo from './logo.svg';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
  <Track
  track={this.props.track}
           onAdd={this.props.onAdd(this.props.track)}
           onRemove={this.props.onRemove(this.props.track)}
          />
        </div>    );
  }
}

const TrackList = (props) => (
	<div>
	  {props.tracks.map((track) => (
    	<div key={track.id}>{track.title || track.name} - {track.artist}
      {props.onAddClick ?
      	( <button onClick={() => props.onAddClick(track)}>Add</button> ) : null }
      {props.onRemoveClick ?
      	( <button onClick={() => props.onRemoveClick(track.id)}>Remove</button> ): null
      }
      </div>
    ))}

export default TrackList;

ReactDOM.render
