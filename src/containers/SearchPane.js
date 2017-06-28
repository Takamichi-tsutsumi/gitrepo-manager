import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateQueryString } from '../actions/SearchActions';


class SearchPane extends Component {
  render() {
    return (
      <div className="columns six">
        { this.props.search.queryString }
        <input
          onChange={(e) => {
            this.props.updateQueryString(e.target.value)
          }}
          value={this.props.search.queryString}
        />
      </div>
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
)(SearchPane);

