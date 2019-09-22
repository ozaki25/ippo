import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import query from 'graphql/query';
import Signin from 'components/pages/Signin';
import { setAuthUser } from 'modules/session';

const mapStateToProps = state => ({
  rawId: state.webauth.rawId,
  uid: state.webauth.uid,
});

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

export default compose(
  withRouter,
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  graphql(query.fetchUser, { name: 'fetchUser' }),
)(Signin);
