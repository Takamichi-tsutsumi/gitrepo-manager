import React from 'react';
import { PropTypes } from 'prop-types';

const WatchPane = (props) => {
  return (
    <div className="columns six">
      <ul>
        {
          props.repositories.map(repo => {
            return <li key={repo.id}>{repo.full_name}</li>;
          })
        }
      </ul>
    </div>
  );
};

WatchPane.propTypes = {
  repositories: PropTypes.arrayOf(Object).isRequired,
};

export default WatchPane;

