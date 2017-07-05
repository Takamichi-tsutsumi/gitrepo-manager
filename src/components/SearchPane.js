import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Input } from './common';

class SearchPane extends Component  {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value !== '') {
      this.props.onInputChange(e.target.value);
    } else {
      this.props.onClear();
    }
  }

  render() {
    return (
      <div className="column">
        <Input
          isLoading={this.props.isLoading}
          queryString={this.props.queryString}
          onFinishEditing={this.props.onFinishEditing}
          onChange={this.onChange}
        />
       <ul>
          {
            this.props.repositories.map(repo => {
              return <li key={repo.id}>{repo.full_name}</li>
            })
          }
        </ul>
      </div>
    );
  }
};

SearchPane.propTypes = {
  queryString: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  repositories: PropTypes.arrayOf(Object).isRequired,
  isLoading: PropTypes.bool,
};

export default SearchPane;

