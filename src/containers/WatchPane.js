import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWatchRepos } from '../actions/WatchActions';


class WatchPane extends Component {
  componentWillMount() {
    // start fetching watch repos
    console.log('Start fetching');
    this.props.fetchWatchRepos();

  }

  render() {
    return (
      <div className="columns six">
        <ul>
          {
            this.props.watch.repositories.map(repo => {
              return <li key={repo.id}>{repo.full_name}</li>;
            })
          }
        </ul>
      </div>
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
)(WatchPane);

