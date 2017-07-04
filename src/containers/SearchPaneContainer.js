import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchPane from '../components/SearchPane';
import { updateQueryString, searchRepos, clearResult } from '../actions/SearchActions';


class SearchPaneContainer extends Component {
  render() {
    return (
      <SearchPane
        repositories={this.props.search.resultList}
        queryString={this.props.search.queryString}
        updateQueryString={this.props.updateQueryString}
        onInputChange={this.props.searchRepos}
        onClear={this.props.clearResult}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQueryString: bindActionCreators(updateQueryString, dispatch),
    searchRepos: bindActionCreators(searchRepos, dispatch),
    clearResult: bindActionCreators(clearResult, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPaneContainer);

