import React from 'react';
import { connect } from 'react-redux';

import { fetchRepositories } from '../../module/repository';
import App from '../../component/app';
import LoaderContainer from '../loader';

const AppContainer = props => (
  <React.Fragment>
    <App {...props} />
    <LoaderContainer />
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    repositories: state.repository.repositories,
    error: state.repository.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(fetchRepositories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
