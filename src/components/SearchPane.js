import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Input, SearchListItem } from './common';

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
        <nav className="panel">
          <p className="panel-heading">Search Repositories</p>
          <div className="panel-block">
            <Input
              isLoading={this.props.isLoading}
              queryString={this.props.queryString}
              onFinishEditing={this.props.onFinishEditing}
              onChange={this.onChange}
            />
          </div>
          {
            this.props.repositories.map(repo => {
              return <SearchListItem
                key={repo.id}
                title={repo.full_name}
                onButtonPress={() => this.props.onSubscribe(repo.subscription_url)}
              />
            })
          }
        </nav>
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
  onSubscribe: PropTypes.func.isRequired
};

export default SearchPane;

