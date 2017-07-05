import React from 'react';
import { PropTypes } from 'prop-types';

const SearchListItem = props => {
  return <div className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-book"></i>
    </span>
    { props.title }
    <button
      className="button is-small"
      style={{ marginLeft: 'auto' }}
      onClick={props.onButtonPress}
    >Watch</button>
  </div>;
};

SearchListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default SearchListItem;

