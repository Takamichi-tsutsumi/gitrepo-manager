import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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
      <div className="columns six">
        <input
          type={'search'}
          className={'u-full-width'}
          placeholder={'search repositories...'}
          value={this.props.queryString}
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
  onClear: PropTypes.func,
  repositories: PropTypes.arrayOf(Object).isRequired,
};

export default SearchPane;

