import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import Signin from 'src/components/pages/Signin';
import { setAuthUser } from 'src/modules/session';

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
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query.fetchUser, { name: 'fetchUser' }),
)(Signin);
