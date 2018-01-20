import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';
import Track from '../TrackList/Track/Track';

function SearchResults({ tracks, onAddTrack }) {
  const action = {
    symbol: '+',
    func: onAddTrack,
  };
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={tracks} action={action} />
    </div>
  );
}
SearchResults.propTypes = {
  tracks: PropTypes.arrayOf(Track.propTypes.track).isRequired,
  onAddTrack: PropTypes.func.isRequired,
};

export default SearchResults;
