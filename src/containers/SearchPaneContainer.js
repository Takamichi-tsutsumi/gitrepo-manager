import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchPane from '../components/SearchPane';
import { updateQuery, clearResult } from '../actions/SearchActions';


class SearchPaneContainer extends Component {
  render() {
    return (
      <SearchPane
        repositories={this.props.search.resultList}
        queryString={this.props.search.queryString}
        onInputChange={this.props.updateQuery}
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
    updateQuery: bindActionCreators(updateQuery, dispatch),
    clearResult: bindActionCreators(clearResult, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPaneContainer);

