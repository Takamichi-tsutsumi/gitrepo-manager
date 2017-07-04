import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WatchPane from '../components/WatchPane';
import { fetchWatchRepos } from '../actions/WatchActions';


class WatchPaneContainer extends Component {
  componentWillMount() {
    this.props.fetchWatchRepos();
  }

  render() {
    return (
      <WatchPane
        repositories={this.props.watch.repositories}
      />
    );
  }
}


const mapStateToProps = state => {
  return {
    watch: state.watch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWatchRepos: bindActionCreators(fetchWatchRepos, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchPaneContainer);

