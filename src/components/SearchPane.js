import React from 'react';
import { PropTypes } from 'prop-types';

const SearchPane = (props) => {
  return (
    <div className="columns six">
      <input
        type={'search'}
        className={'u-full-width'}
        placeholder={'search repositories...'}
        value={props.queryString}
        onChange={(e) => {
          props.updateQueryString(e.target.value)
        }}
      />
    </div>

  );
};

SearchPane.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
  queryString: PropTypes.string.isRequired,
};

export default SearchPane;

