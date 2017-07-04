import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchPane from '../components/SearchPane';
import { updateQueryString } from '../actions/SearchActions';


class SearchPaneContainer extends Component {
  render() {
    return (
      <SearchPane
        queryString={this.props.search.queryString}
        updateQueryString={this.props.updateQueryString}
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
    updateQueryString: bindActionCreators(updateQueryString, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPaneContainer);

