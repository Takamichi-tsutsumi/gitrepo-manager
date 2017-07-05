import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchPane from '../components/SearchPane';
import { searchRepos, updateQueryString, clearResult } from '../actions/SearchActions';
import { subscribeRepoAsync } from '../actions/WatchActions';


class SearchPaneContainer extends Component {
  render() {
    return (
      <SearchPane
        repositories={this.props.search.resultList}
        queryString={this.props.search.queryString}
        isLoading={this.props.search.isLoading}
        onInputChange={this.props.updateQueryString}
        onFinishEditing={this.props.searchRepos}
        onClear={this.props.clearResult}
        onSubscribe={this.props.subscribeRepoAsync}
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
    searchRepos: bindActionCreators(searchRepos, dispatch),
    updateQueryString: bindActionCreators(updateQueryString, dispatch),
    clearResult: bindActionCreators(clearResult, dispatch),
    subscribeRepoAsync: bindActionCreators(subscribeRepoAsync, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPaneContainer);

