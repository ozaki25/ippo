import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import { setAuthUser } from 'src/modules/session';
import SettingsAccount from 'src/components/pages/SettingsAccount';
import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => dispatch(setAuthUser(authUser)),
});

export default compose(
  connect(null, mapDispatchToProps),
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.fetchUser, {
    options: ({ authUser: { uid } }) => ({ variables: { uid } }),
  }),
  graphql(mutation.createUser, { name: 'updateUser' }),
)(SettingsAccount);
