import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import { setAuthUser } from 'modules/session';
import SettingsAccount from 'components/pages/SettingsAccount';
import { withFirebase } from 'context/firebase';
import { withAuthorization } from 'hoc/Sessions';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.fetchUser, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
  }),
  graphql(mutation.createUser, { name: 'updateUser' }),
)(SettingsAccount);
